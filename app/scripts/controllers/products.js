angular.module('ngday2App')
	.controller('ProductCtrl', ['$scope', '$location', 'ProductsService', function($scope, $location, ProductsService) {

		$scope.products = ProductsService.getAllProducts();
		$scope.addProduct = function() {
			$location.path('/addProduct');
		};
		$scope.createProduct = function(product) {
			ProductsService.createNewProduct(product);
			$location.path('/cookies');
		};



	}]);