// import Cookies from 'js-cookie'

let banner = 'version1';

if (banner == 'version1') {
    let acceptCookie = document.querySelector(
        '.cookie-bar__buttons-holder_right'
    );
    let cookieBlock = document.querySelector('.cookie-bar');
    let currentCookieSelection = Cookies.get('Cookiebar');
    let body = document.querySelector('body');

    if (currentCookieSelection !== 'CookieAllowed') {
        cookieBlock.classList.toggle('cookie-bar--opened');
    }

    acceptCookie.addEventListener('click', () => {
        cookieBlock.classList.toggle('cookie-bar--opened');
        body.classList.remove('noScroll');
        let currentCookieSelection = Cookies.get('Cookiebar');

        if (currentCookieSelection !== 'CookieAllowed') {
            Cookies.remove('Cookiebar');
            localStorage.clear();
            Cookies.set('Cookiebar', 'CookieAllowed', { expires: 30 });
        }
    });

    let openSettings = document.querySelector('.cookie-bar__buttons-holder_left');
    let settings = document.querySelector('.cookie-bar__settings');

    openSettings.addEventListener('click', () => {
        settings.classList.toggle('cookie-bar__settings--opened');
    });

    let acceptSettings = document.querySelector('.cookie-settings__save-btn');
    acceptSettings.addEventListener('click', () => {
        settings.classList.toggle('cookie-bar__settings--opened');

        info1.classList.remove('opened');
        openInfo1.classList.remove('opened');
        info2.classList.remove('opened');
        openInfo2.classList.remove('opened');
        info3.classList.remove('opened');
        openInfo3.classList.remove('opened');
    });

    let openInfo1 = document.querySelector('.cookie-settings__list-title1');
    let info1 = document.querySelector('.cookie-settings__list-description1');

    let openInfo2 = document.querySelector('.cookie-settings__list-title2');
    let info2 = document.querySelector('.cookie-settings__list-description2');

    let openInfo3 = document.querySelector('.cookie-settings__list-title3');
    let info3 = document.querySelector('.cookie-settings__list-description3');

    openInfo1.addEventListener('click', () => {
        info1.classList.toggle('opened');
        openInfo1.classList.toggle('opened');

        info2.classList.remove('opened');
        openInfo2.classList.remove('opened');

        info3.classList.remove('opened');
        openInfo3.classList.remove('opened');
    });
    openInfo2.addEventListener('click', () => {
        info2.classList.toggle('opened');
        openInfo2.classList.toggle('opened');

        info1.classList.remove('opened');
        openInfo1.classList.remove('opened');

        info3.classList.remove('opened');
        openInfo3.classList.remove('opened');
    });
    openInfo3.addEventListener('click', () => {
        info3.classList.toggle('opened');
        openInfo3.classList.toggle('opened');

        info1.classList.remove('opened');
        openInfo1.classList.remove('opened');

        info2.classList.remove('opened');
        openInfo2.classList.remove('opened');
    });

    jQuery(document).ready(function ($) {
        if ($('.cookie-bar').hasClass('cookie-bar--opened')) {
            $('body').addClass('noScroll');
        }

        $('#performance').prop('checked', true);
        $('#analytics').prop('checked', true);
        $('#marketing').prop('checked', true);
    });
} else if (banner == 'version2') {
    //Cookie-bottom
    let acceptCookie = document.querySelector('.cookie__button');
    let cookieBlock = document.querySelector('.cookie');
    let currentCookieSelection = Cookies.get('Cookiebar');

    if (currentCookieSelection !== 'CookieAllowed') {
        cookieBlock.classList.toggle('cookie--opened');
    }

    acceptCookie.addEventListener('click', () => {
        cookieBlock.classList.toggle('cookie--opened');
        let currentCookieSelection = Cookies.get('Cookiebar')

        if (currentCookieSelection !== 'CookieAllowed') {
            Cookies.remove('Cookiebar');
            localStorage.clear();
            Cookies.set('Cookiebar', 'CookieAllowed', { expires: 30 });
        }
    });
}
