moviecatApp.controller('movieDetailsController', ['$scope', '$routeParams', 'movieService', movieDetailsController]);

function movieDetailsController($scope, $routeParams, movieService) {
  $scope.routeParams = $routeParams;
	movieService.movieDetails($routeParams.movieId, function(result){
			$scope.movieDetails = result.data;
	});	

}