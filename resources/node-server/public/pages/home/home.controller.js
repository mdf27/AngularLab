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
	  });
	  $scope.$on('mouseover', function(event, $content){
	  	$(event.target).tooltip({
	  		     show: {
		        effect: "slideDown",
		        delay: 250
		    },
	  		position: {
	  			of: event
	  		}
	  	})
	  });
	}
	return homecontroller;
});


