var moviecatApp = angular.module('moviecatApp',['ngRoute']);

moviecatApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'maincontroller',
		templateUrl:'Partials/main.html'		
	})
	.when('/movieDetails/:movieId',{
		controller: 'movieDetailsController',
		templateUrl:'Partials/movieDetails.html'		
	})
    .otherwise({
        redirectTo: '/'
    });
})

moviecatApp.factory('movieFactory', function($http){
  var factory = {};
  factory.getAll = function(data){
    $http.get('/api/movies').then(data);    
  }; 
  factory.movieDetails = function(movieID, data){
  	$http.get('/api/movies/'+movieID)
  	.then(data);
  };  
  
  return factory;
});

function maincontroller($scope, $routeParams, movieFactory) {
  $scope.$routeParams = $routeParams;
	movieFactory.getAll(function(result){
    	$scope.movies = result.data;
  	});	
}

moviecatApp.controller('maincontroller', ['$scope', '$routeParams', 'movieFactory', maincontroller]);

moviecatApp.controller('movieDetailsController', ['$scope', '$routeParams', 'movieFactory', movieDetailsController]);

function movieDetailsController($scope, $routeParams, movieFactory) {
  $scope.routeParams = $routeParams;
	movieFactory.movieDetails($routeParams.movieId, function(result){
			$scope.movieDetails = result.data;
	});	

}

