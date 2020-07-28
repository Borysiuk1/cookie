"use strict";

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var banner = 'version1';

if (banner == 'version1') {
  var acceptCookie = document.querySelector('.cookie-bar__buttons-holder_right');
  var cookieBlock = document.querySelector('.cookie-bar');

  var currentCookieSelection = _jsCookie["default"].get('Cookiebar');

  var body = document.querySelector('body');

  if (currentCookieSelection !== 'CookieAllowed') {
    cookieBlock.classList.toggle('cookie-bar--opened');
  }

  acceptCookie.addEventListener('click', function () {
    cookieBlock.classList.toggle('cookie-bar--opened');
    body.classList.remove('noScroll');

    var currentCookieSelection = _jsCookie["default"].get('Cookiebar');

    if (currentCookieSelection !== 'CookieAllowed') {
      _jsCookie["default"].remove('Cookiebar');

      localStorage.clear();

      _jsCookie["default"].set('Cookiebar', 'CookieAllowed', {
        expires: 30
      });
    }
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
  var openInfo2 = document.querySelector('.cookie-settings__list-title2');
  var info2 = document.querySelector('.cookie-settings__list-description2');
  var openInfo3 = document.querySelector('.cookie-settings__list-title3');
  var info3 = document.querySelector('.cookie-settings__list-description3');
  openInfo1.addEventListener('click', function () {
    info1.classList.toggle('opened');
    openInfo1.classList.toggle('opened');
    info2.classList.remove('opened');
    openInfo2.classList.remove('opened');
    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });
  openInfo2.addEventListener('click', function () {
    info2.classList.toggle('opened');
    openInfo2.classList.toggle('opened');
    info1.classList.remove('opened');
    openInfo1.classList.remove('opened');
    info3.classList.remove('opened');
    openInfo3.classList.remove('opened');
  });
  openInfo3.addEventListener('click', function () {
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
  var getCookie = function getCookie() {
    var cookieValue = document.cookie.match(/(;)?Cookiebar=([^;]*);?/);

    if (cookieValue == null) {
      return undefined;
    } else {
      return decodeURI(cookieValue[2]);
    }
  };

  var setCookie = function setCookie(name, value) {
    var exdays = 30;
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + parseInt(exdays));
    var cValue = encodeURI(value) + (exdays === null ? '' : '; expires=' + exdate.toUTCString() + ';path=/');
    document.cookie = name + '=' + cValue;
  };

  var removeCookies = function removeCookies() {
    // Clear cookies
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c.replace(/^\ +/, '').replace(/\=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    }); // Clear localStorage

    localStorage.clear();
  };

  var _acceptCookie = document.querySelector('.cookie__button');

  var _cookieBlock = document.querySelector('.cookie');

  var _currentCookieSelection = getCookie();

  if (_currentCookieSelection !== 'CookieAllowed') {
    _cookieBlock.classList.toggle('cookie--opened');
  }

  _acceptCookie.addEventListener('click', function () {
    _cookieBlock.classList.toggle('cookie--opened');

    var currentCookieSelection = getCookie();

    if (currentCookieSelection !== 'CookieAllowed') {
      removeCookies();
      setCookie('Cookiebar', 'CookieAllowed');
    }
  });
}