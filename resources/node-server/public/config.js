define([],function(){
	function config($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home',{
			url:'/',
			controller: 'homecontroller',
			templateUrl:'pages/home/home.html'		
		})
		.state('moviesDetail',{
			url:'/movieDetails/:movieId',
			controller: 'movieDetailsController',
			templateUrl:'pages/movieDetails/movieDetails.html'		
		})
	    $urlRouterProvider.otherwise('/');
	}	
  	return config;
})
