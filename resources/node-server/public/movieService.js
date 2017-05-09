define([], function(){
  function movieService($http){
    var service = {};
    service.getAll = function(data){
      $http.get('/api/movies').then(data);    
    }; 
    service.movieDetails = function(movieID, data){
      $http.get('/api/movies/'+movieID)
      .then(data);
    };  
    service.searchQuery = function(params, data){
      $http.get('/api/movies?genre=Drama')
      .then(data);
    };
    return service;
  }

  movieService.$inject=['$http'];

  return movieService;
});
