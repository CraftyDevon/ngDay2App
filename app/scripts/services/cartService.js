angular.module('ngday2App')
	.factory('crtService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStoreCart', {},
			{
				query: { 
					method: 'GET', 
					isArray: true 
				},
				showCart: {
					method: 'GET',
					isArray: true
				},
				addToCart: {
					method: 'POST'
				}
			});
	});

		.factory('crtServices', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStoreCart/:id', 
		{
			id: '@_id'
		}, 
		{
			updateQty: { method: 'PUT'	},
			deleteCartProduct: { method: 'DELETE'	}


		});
	});



	// get all posts
	// create a post