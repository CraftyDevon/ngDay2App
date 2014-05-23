'use strict';

angular.module('ngday2App', [
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
        .when('/addProduct', {
        templateUrl: 'views/addProduct.html',
        controller: 'ProductsCtrl'
      })
        .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductSCtrl'
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
          .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
