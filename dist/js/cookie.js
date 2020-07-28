"use strict";

// let banner = 'version1';
jQuery(document).ready(function ($) {
  //   if (banner == 'version1') {
  var defaultSettings = {
    date: new Date(),
    necessary: true,
    performance: true,
    analytics: true,
    marketing: true
  };
  var acceptCookie = document.querySelector('.cookie-bar__buttons-holder_right');
  var cookieBlock = document.querySelector('.cookie-bar');
  var savedCookieSettings = Cookies.getJSON('Cookiebar');

  if (!savedCookieSettings) {
    document.body.classList.add('noScroll');
    cookieBlock.classList.toggle('cookie-bar--opened');
  } else {
    defaultSettings.performance = savedCookieSettings.performance;
    defaultSettings.analytics = savedCookieSettings.analytics;
    defaultSettings.marketing = savedCookieSettings.marketing;
  }

  acceptCookie.addEventListener('click', function () {
    cookieBlock.classList.toggle('cookie-bar--opened');
    document.body.classList.remove('noScroll');
    var savedCookieSettings = Cookies.getJSON('Cookiebar');

    if (!savedCookieSettings) {
      Cookies.remove('Cookiebar');
      localStorage.clear();
      Cookies.set('Cookiebar', defaultSettings, {
        expires: 365
      });
    }
  });
  $('.custom-checkbox').change(function () {
    var optionValue = $(this).is(':checked');
    var optionName = $(this).attr('name');
    defaultSettings[optionName] = optionValue;
  });
  var openSettings = document.querySelector('.cookie-bar__buttons-holder_left');
  var settings = document.querySelector('.cookie-bar__settings');
  openSettings.addEventListener('click', function () {
    settings.classList.toggle('cookie-bar__settings--opened');
  });
  var acceptSettings = document.querySelector('.cookie-settings__save-btn');
  acceptSettings.addEventListener('click', function () {
    settings.classList.toggle('cookie-bar__settings--opened');
    info1.classList.remove('opened');
    openInfo1.classList.remove('opened');
    info2.classList.remove('opened');
    openInfo2.classList.remove('opened');
    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });
  var openInfo1 = document.querySelector('.cookie-settings__list-title1');
  var info1 = document.querySelector('.cookie-settings__list-description1');
  openInfo1.addEventListener('click', function () {
    info1.classList.toggle('opened');
    openInfo1.classList.toggle('opened');
    info2.classList.remove('opened');
    openInfo2.classList.remove('opened');
    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });
  var openInfo2 = document.querySelector('.cookie-settings__list-title2');
  var info2 = document.querySelector('.cookie-settings__list-description2');
  openInfo2.addEventListener('click', function () {
    info2.classList.toggle('opened');
    openInfo2.classList.toggle('opened');
    info1.classList.remove('opened');
    openInfo1.classList.remove('opened');
    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });
  var openInfo3 = document.querySelector('.cookie-settings__list-title3');
  var info3 = document.querySelector('.cookie-settings__list-description3');
  openInfo3.addEventListener('click', function () {
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
  $('#marketing').prop('checked', defaultSettings.marketing); //   }
}); // else if (banner == 'version2') {
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