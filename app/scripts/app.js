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
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'firebase',
    'restangular'
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
        apiKey: "AIzaSyDGSaSZzpJ8lLj_tiCrCLC8-6oGMQwbilE",
        authDomain: "imagesserver-49818.firebaseapp.com",
        databaseURL: "https://imagesserver-49818.firebaseio.com",
        projectId: "imagesserver-49818",
        storageBucket: "imagesserver-49818.appspot.com",
        messagingSenderId: "536730546544"
      };

     firebase.initializeApp(config);
});
