angular.module('ngday2App')
	.controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'ProductsService', function($scope, $routeParams, $location, ProductsService) {
		
		$scope.product = ProductsService.showProduct({ id: $routeParams.id });

		$scope.updateProduct = function() {
			ProductsService.updateProduct($scope.product);
			$location.path('/cookies/' + $routeParams.id);
		};

		$scope.delete = function() {
			ProductsService.deleteProduct({ id: $routeParams.id });
			$location.path('/cookies');
		};
		// editing
		// deleting
		// showing

	}]);