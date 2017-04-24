var moviecatApp = angular.module('moviecatApp',['ngRoute']);

moviecatApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'maincontroller',
		templateUrl:'Partials/main.html'		
	})
	.when('/movieDetails',{
		controller: 'movieDetailsController',
		templateUrl:'Partials/movieDetails.html'		
	})
    .otherwise({
        redirectTo: '/'
    });
})

moviecatApp.factory('movieFactory', function($http){
  var factory = {
  	currentMovie : ''
  };
  factory.getAll = function(data){
    $http.get('/api/movies').then(data);    
  }; 
  factory.movieDetails = function(movie, data){
  	$http.get('/api/movies/'+movie.id)
  	.then(data);
  };  
  
  return factory;
});

function maincontroller($scope, movieFactory) {

	movieFactory.getAll(function(result){
    	$scope.movies = result.data;
  	});

  	$scope.currentMovie = function(movie){
  		movieFactory.currentMovie = movie;		
	}
	
}

moviecatApp.controller('maincontroller', ['$scope', 'movieFactory', maincontroller]);

moviecatApp.controller('movieDetailsController', ['$scope', 'movieFactory', movieDetailsController]);

function movieDetailsController($scope, movieFactory) {

	movieFactory.movieDetails(movieFactory.currentMovie, function(result){
			$scope.movieDetails = result.data;
	});	

}

