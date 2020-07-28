const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const minifyCSS = require('gulp-minify-css');
const minify = require('gulp-minify');

function swallowError (error) {
    // If you want details of the error in the console
    console.log(error.toString())
  
    this.emit('end')
}

function scss() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(autoprefixer('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({stream: true}));
}

function js() {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'))
}

function watch () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/scss/**/*.scss').on('change', gulp.series(scss));
    gulp.watch('./*.html').on('change', browserSync.reload);
}


gulp.task('styles', scss);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('default', gulp.series(scss, 'watch'));
gulp.task('default', gulp.series(js, 'watch'));

