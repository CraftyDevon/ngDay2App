angular.module('ngday2App')
	.controller('Cart', ['$scope', '$routeParams', '$location', 'cartProductService', function($scope, $routeParams, $location, cartProductService) {
		
		
		$scope.cartItems = cartProductService.showCart({ id: $routeParams.id });




		$scope.deleteCartProduct = function() {
			crtServices.deleteCartProduct({ id: $routeParams.id });
			$location.path('/cookies');
		};
		// editing
		// deleting
		// showing

	}]);