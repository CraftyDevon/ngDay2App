'use strict';

angular.module('ngday2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngday2App.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
        .when('/addProduct', {
        templateUrl: 'views/addProduct.html',
        controller: 'ProductsCtrl'
      })
        .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/cookies/:id', {
        templateUrl: 'views/detail.html',
        controller: 'ProductCtrl'
      })
      .when('/cookies/:id/edit', {
        templateUrl: 'views/editProduct.html',
        controller: 'ProductCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/shoppingcart.html',
      })
          .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ProductCtrl'
      })    

        .when('/test', {
        templateUrl: 'views/testview.html',
        controller: 'ProductCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
