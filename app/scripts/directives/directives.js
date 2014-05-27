angular.module('ngday2App.directives', []);

	angular.module('ngday2App.directives')

	.directive('cookieDetails', function() {
  return {
      restrict: 'AE',
      template: '<h2>{{product.name}}</h2><h2>{{product.price}} each</h2><p>{{product.description}}</p><p></a><a href="#/{{product._id}}/edit">Edit</a> | <a href="" ng-click="delete()">Delete</a></p><div ng-controller="CartCtrl"><button ng-click="addToCart(product)">Add To Cart</button></div>'
  	};
	});


