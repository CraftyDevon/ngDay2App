angular.module('ngday2App')
	.factory('crtService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStoreCart', {},
			{
				
				showCart: {
					method: 'GET',
					isArray: true
				},
				addToCart: {
					method: 'POST'
				}
			});
	});



	// get all posts
	// create a post