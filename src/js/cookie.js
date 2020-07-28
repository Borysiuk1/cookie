// let banner = 'version1';

jQuery(document).ready(function ($) {
  //   if (banner == 'version1') {
  let defaultSettings = {
    date: new Date(),
    necessary: true,
    performance: true,
    analytics: true,
    marketing: true,
  };

  let acceptCookie = document.querySelector('.cookie-bar__buttons-holder_right',);
  let cookieBlock = document.querySelector('.cookie-bar');
  let savedCookieSettings = Cookies.getJSON('Cookiebar');

  if (!savedCookieSettings) {
    document.body.classList.add('noScroll');
    cookieBlock.classList.toggle('cookie-bar--opened');
  } else {
    defaultSettings.performance = savedCookieSettings.performance;
    defaultSettings.analytics = savedCookieSettings.analytics;
    defaultSettings.marketing = savedCookieSettings.marketing;
  }

  acceptCookie.addEventListener('click', () => {
    cookieBlock.classList.toggle('cookie-bar--opened');
    document.body.classList.remove('noScroll');
    let savedCookieSettings = Cookies.getJSON('Cookiebar');

    if (!savedCookieSettings) {
      Cookies.remove('Cookiebar');
      localStorage.clear();
      Cookies.set('Cookiebar', defaultSettings, { expires: 365 });
    }
  });

  $('.custom-checkbox').change(function () {
    let optionValue = $(this).is(':checked');
    let optionName = $(this).attr('name');
    defaultSettings[optionName] = optionValue;
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
  openInfo1.addEventListener('click', () => {
    info1.classList.toggle('opened');
    openInfo1.classList.toggle('opened');

    info2.classList.remove('opened');
    openInfo2.classList.remove('opened');

    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });

  let openInfo2 = document.querySelector('.cookie-settings__list-title2');
  let info2 = document.querySelector('.cookie-settings__list-description2');
  openInfo2.addEventListener('click', () => {
    info2.classList.toggle('opened');
    openInfo2.classList.toggle('opened');

    info1.classList.remove('opened');
    openInfo1.classList.remove('opened');

    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });

  let openInfo3 = document.querySelector('.cookie-settings__list-title3');
  let info3 = document.querySelector('.cookie-settings__list-description3');
  openInfo3.addEventListener('click', () => {
    info3.classList.toggle('opened');
    openInfo3.classList.toggle('opened');

    info1.classList.remove('opened');
    openInfo1.classList.remove('opened');

    info2.classList.remove('opened');
    openInfo2.classList.remove('opened');
  });

  if ($('.cookie-bar').hasClass('cookie-bar--opened')) {
    $('body').addClass('noScroll');
  }

  $('#performance').prop('checked', defaultSettings.performance);
  $('#analytics').prop('checked', defaultSettings.analytics);
  $('#marketing').prop('checked', defaultSettings.marketing);
  //   }
});

// else if (banner == 'version2') {
//   //Cookie-bottom
//   let acceptCookie = document.querySelector('.cookie__button');
//   let cookieBlock = document.querySelector('.cookie');
//   let currentCookieSelection = Cookies.get('Cookiebar');

//   if (currentCookieSelection !== 'CookieAllowed') {
//     cookieBlock.classList.toggle('cookie--opened');
//   }

//   acceptCookie.addEventListener('click', () => {
//     cookieBlock.classList.toggle('cookie--opened');
//     let currentCookieSelection = Cookies.get('Cookiebar');

//     if (currentCookieSelection !== 'CookieAllowed') {
//       Cookies.remove('Cookiebar');
//       localStorage.clear();
//       Cookies.set('Cookiebar', 'CookieAllowed', { expires: 30 });
//     }
//   });
// }