define([],function(){
	function config($routeProvider){
		$routeProvider
		.when('/',{
			controller: 'homecontroller',
			templateUrl:'pages/home/home.html'		
		})
		.when('/movieDetails/:movieId',{
			controller: 'movieDetailsController',
			templateUrl:'pages/movieDetails/movieDetails.html'		
		})
	    .otherwise({
	        redirectTo: '/'
	    });
	}
	config.$inject=['$routeProvider'];

  	return config;
})
