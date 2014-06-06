angular.module('ngday2App')
	.controller('CartCtrl', ['$scope', '$routeParams', '$location', 'crtService', function($scope, $routeParams, $location, crtService) {
		
		
		$scope.cartItems = crtService.showCart({ id: $routeParams.id });



		$scope.addToCart = function() {
			crtService.addToCart($scope.product);
			$location.path('/shoppingcart');
			console.log("hi");
		};


		$scope.updateQty = function() {
			crtServices.updateQty($scope.product);
			$location.path('/cookies/' + $routeParams.id);
		};
		// editing
		// deleting
		// showing

	}]);

		

		