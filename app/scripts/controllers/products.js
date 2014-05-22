angular.module('ngday2App')
	.controller('ProductCtrl', ['$scope', '$location', 'ProductsService', function($scope, $location, ProductsService) {

		$scope.products = ProductService.getAllProducts();
		$scope.addProduct = function() {
			$location.path('/addProduct');
		};
		$scope.createProduct = function(product) {
			ProductService.createNewProduct(product);
			$location.path('/cookies');
		};



	}]);