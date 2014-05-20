'use strict';

var cookieStore = angular.module('ngday2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cookieType = [

    {'name': 'Chocolate Extreme',
     'thumb': 'imgs/cet.png',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '1',
    },
    {'name': 'The Original Chocolate Chip',
     'thumb': 'imgs/cet.png',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '2',
    },
    {'name': 'Red Velvet Surpreme',
     'thumb': 'imgs/cet.png',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '3',
    },
    {'name': 'White Chocolate Mac',
     'thumb': 'imgs/cet.png',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '4'
    }
    ]

    });




  	cookieStore.controller('detailCtrl', function($scope, $routeParams){

    $scope.productReviews = [


    ];
    });

    cookieStore.controller('cartCtrl', function($scope, $routeParams){

    
    });

