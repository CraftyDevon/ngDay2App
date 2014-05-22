'use strict';

angular.module('theCookieStore', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/newcookie', {
        templateUrl: 'views/addProduct.html',
        controller: 'ProductCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/detail.html',
        controller: 'ProductCtrl'
      })
      .when('/product/:id/edit', {
        templateUrl: 'views/editProduct.html',
        controller: 'ProductCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
