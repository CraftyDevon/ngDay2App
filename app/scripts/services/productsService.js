angular.module('ngday2App')
	.factory('ProductsService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStore', {},
			{
				showProduct: {
					method: 'GET',
					isArray: true
				},
				createNewProduct: {
					method: 'POST'
				}
			});
	});

	// get all posts
	// create a post