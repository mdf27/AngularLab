var moviecatApp = angular.module('moviecatApp',['ngRoute']);

moviecatApp.config(function($routeProvider){
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
})

moviecatApp.service('movieService', function($http){
  var service = {};
  service.getAll = function(data){
    $http.get('/api/movies').then(data);    
  }; 
  service.movieDetails = function(movieID, data){
  	$http.get('/api/movies/'+movieID)
  	.then(data);
  };  
  service.searchQuery = function(params, data){
    $http.get('/api/movies?genre=Drama')
    .then(data);
  };
  return service;
});