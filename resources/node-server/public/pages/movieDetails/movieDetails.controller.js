define([], function(){
	function movieDetailsController($scope, $routeParams, movieService) {
		$scope.routeParams = $routeParams;
		movieService.movieDetails($routeParams.movieId, function(result){
				$scope.movieDetails = result.data;
		});	
		$scope.addToBag = function addToBag() {
			console.log("hello");
		}
	}
	return movieDetailsController;
});
