define(['config',
  'services/movieService',
  'pages/home/home.controller',
  'pages/movieDetails/movieDetails.controller',
  'components/loader/loader.directive'],

  function (config, movieService, homeController, movieDetailsController, loader){
    var app = angular.module('moviecatApp',['ngRoute']);
    app.config(config);
    app.service('movieService', movieService);
    app.controller('homecontroller', homeController);
    app.controller('movieDetailsController', movieDetailsController);
    app.directive('loader', loader);
  }); 