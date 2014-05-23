angular.module('ngday2App')
	.controller('ProductsCtrl', ['$scope', '$location', 'ProductsService', function($scope, $location, ProductsService) {

		$scope.products = ProductsService.showProduct();
		$scope.addProduct = function() {
			$location.path('/addProduct');
		};
		$scope.createProduct = function(product) {
			ProductsService.createNewProduct(product);
			$location.path('/products');
		};



	}]);