angular.module('theCookieStore')
	.factory('PostService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/theCookieStore/:id', 
		{
			id: '@_id'
		}, 
		{
			showProduct: { method: 'GET'	},
			updateProduct: { method: 'PUT'	},
			deleteProduct: { method: 'DELETE'	}


		});
	});

	// edit a single post 
	// delete a single post
	// show a single post