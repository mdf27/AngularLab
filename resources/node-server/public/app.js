var moviecatApp = angular.module('moviecatApp',[]);

moviecatApp.factory('movieFactory', function($http){
  var factory = {};
  factory.getAll = function(data){
    $http.get('/api/movies').then(data);    
  };  
  return factory;
});

moviecatApp.controller('maincontroller', ['$scope', 'movieFactory', maincontroller]);

function maincontroller($scope, movieFactory) {

	movieFactory.getAll(function(result){
    $scope.movies = result.data;
  });

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


