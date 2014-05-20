'use strict';

angular
  .module('ngday2App', [
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
      .when('/products', {
        templateUrl: 'views/detail.html',
        controller: 'detailCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
