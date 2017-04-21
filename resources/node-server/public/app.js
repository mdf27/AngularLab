var moviecatApp = angular.module('moviecatApp',[]);

moviecatApp.factory('movieFactory', function($http){
  var factory = {};
  factory.getAll = function(callback){
    $http.get('/api/movies').success(callback);
    conslole.log("$scope.movies");
  };  
  return factory;
});

moviecatApp.controller('maincontroller', ['$scope', 'movieFactory', maincontroller]);

function maincontroller($scope, movieFactory) {

	$scope.movies = movieFactory.getAll();

    $scope.addCity = function() {
    	/*var newCity = {
    			name: $scope.newCity,
    			country: $scope.newCountry
    		}
    	
    	cityFactory.addCity(newCity);
    	$scope.newCity= '';
    	$scope.newCountry= '';*/
    }
}


