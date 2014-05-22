'use strict';

angular.module('ngday2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cookieType = [

    {'name': 'Chocolate Extreme',
     'thumb': 'http://placehold.it/150x150" alt="">',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '1',
    },
    {'name': 'The Original Chocolate Chip',
     'thumb': 'http://placehold.it/150x150" alt="">',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '2',
    },
    {'name': 'Red Velvet Surpreme',
     'thumb': 'http://placehold.it/150x150" alt="">',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '3',
    },
    {'name': 'White Chocolate Mac',
     'thumb': 'http://placehold.it/150x150" alt="">',
     'descipt': 'An amazing mix of all things chocolate',
     'image': 'cef.png',
     'price': '5.00',
     'id': '4'
    }
    ]

    });




