angular.module('ngday2App')
	.controller('CartCtrl', ['$scope', '$routeParams', '$location', 'crtService', function($scope, $routeParams, $location, crtService) {
		
		$scope.addToCart = function() {
			crtService.addToCart($scope.product);
			$location.path('/shoppingcart');
			console.log("hi");
		};


		$scope.updateQty = function() {
			crtServices.updateQty($scope.product);
			$location.path('/cookies/' + $routeParams.id);
		};


		$scope.delete = function() {
			crtServices.deleteCartProduct({ id: $routeParams.id });
			$location.path('/products');
		};
		// editing
		// deleting
		// showing

	}]);

		