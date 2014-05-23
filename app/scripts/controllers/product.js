angular.module('ngday2App')
	.controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'ProductService', function($scope, $routeParams, $location, ProductService) {
		
		$scope.product = ProductService.showProduct({ id: $routeParams.id });

		$scope.updateProduct = function() {
			ProductService.updateProduct($scope.product);
			$location.path('/cookies/' + $routeParams.id);
		};

		$scope.delete = function() {
			ProductService.deleteProduct({ id: $routeParams.id });
			$location.path('/cookies');
		};
		// editing
		// deleting
		// showing

	}]);