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
	  $scope.showPlot = function(event, $content){
	  	$(event.target).tooltip({
	  		content: $content,
	  		items: "article",
	  		track: true
	  	})
	  };
	}
	return homecontroller;
});


