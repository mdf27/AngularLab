define([], function(){
	function movieDetailsController($scope, $stateParams, movieService) {
		$scope.stateParams = $stateParams;
		movieService.movieDetails($stateParams.movieId, function(result){
				$scope.movieDetails = result.data;
		});	
		$scope.addToBag = function (event) {
			$scope.$emit('addToBag', $scope.movieDetails);
			console.log("emit fired");
		}	
		/*function addToBag() {
			console.log("hello");
		}*/
	}
	return movieDetailsController;
});
