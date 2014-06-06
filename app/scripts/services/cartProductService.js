angular.module('ngday2App')
	.factory('cartProductService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStoreCart/:id', 
		{
			id: '@_id'
		}, 
		{
			showCart: { method: 'GET'	},
			updateCartProduct: { method: 'PUT'	},
			deleteCartProduct: { method: 'DELETE'	}


		});
	});

	// edit a single post 
	// delete a single post
	// show a single post