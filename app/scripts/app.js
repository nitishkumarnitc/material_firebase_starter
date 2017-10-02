'use strict';

/**
 * @ngdoc overview
 * @name photoShopApp
 * @description
 * # photoShopApp
 *
 * Main module of the application.
 */
angular
  .module('photoShopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'firebase'
  ])
  .config(function ($stateProvider,$mdThemingProvider) {

    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl: 'views/login.html',
      controller:'LoginCtrl'
    };
    var homeState={
      name:'home',
      url:'/home',
      templateUrl:'views/home.html',
      controller:'HomeCtrl'
    };

    $stateProvider.state(loginState);
    $stateProvider.state(homeState);
    $stateProvider
      .state("otherwise", { url : '/login'})

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink');
  })
  .config(function(){
      var config = {

      };

     firebase.initializeApp(config);
});
