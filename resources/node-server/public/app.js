var moviecatApp = angular.module('moviecatApp',['ngRoute']);

moviecatApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'maincontroller',
		templateUrl:'templates/main.html'		
	})
	.when('/movieDetails/:movieId',{
		controller: 'movieDetailsController',
		templateUrl:'templates/movieDetails.html'		
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

function maincontroller($scope, movieService) {

	movieService.getAll(function(result){
    	$scope.movies = result.data;
  	});	
  $scope.searchQuery = function(){
    movieService.searchQuery("params", function(result){
      $scope.movies = result.data;
    })
  }
}

moviecatApp.controller('maincontroller', ['$scope', 'movieService', maincontroller]);

moviecatApp.controller('movieDetailsController', ['$scope', '$routeParams', 'movieService', movieDetailsController]);

function movieDetailsController($scope, $routeParams, movieService) {
  $scope.routeParams = $routeParams;
	movieService.movieDetails($routeParams.movieId, function(result){
			$scope.movieDetails = result.data;
	});	

}
