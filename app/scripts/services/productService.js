angular.module('ngday2App')
	.factory('ProductService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/devStore/:id', 
		{
			id: '@_id'
		}, 
		{
			getAllProducts: { method: 'GET'	},
			updateProduct: { method: 'PUT'	},
			deleteProduct: { method: 'DELETE'	}


		});
	});

	// edit a single post 
	// delete a single post
	// show a single post