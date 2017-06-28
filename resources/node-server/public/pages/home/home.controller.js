define([], function(){
	function homecontroller($scope, movieService) {

	  movieService.getAll(function(result){
	      $scope.movies = result.data;
	    }); 
	  $scope.searchQuery = function(){
	    movieService.searchQuery("params", function(result){
	      $scope.movies = result.data;
	    })
	  };
	  $scope.$on('addToBag' , function(event, data){
	  	console.log("on fired");
	  })
	}
	return homecontroller;
});


