define([], function(){
	function movieDetailsController($scope, $routeParams, movieService) {
	  $scope.routeParams = $routeParams;
		movieService.movieDetails($routeParams.movieId, function(result){
				$scope.movieDetails = result.data;
		});	
	}

	movieDetailsController.$inject=['$scope', '$routeParams', 'movieService'];

	return movieDetailsController;
});
