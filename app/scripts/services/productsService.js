angular.module('theCookieStore')
	.factory('PostsService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/theCookieStore', {},
			{
				getAllProducts: {
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