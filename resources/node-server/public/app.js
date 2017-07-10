define(['config',
  'services/movieService',
  'pages/home/home.controller',
  'pages/movieDetails/movieDetails.controller',
  'components/loader/loader.directive',
  'pages/header/header.directive'],

  function (config, movieService, homeController, movieDetailsController, loader, header){
    var app = angular.module('moviecatApp',['ui.router']);
    app.config(config);
    app.service('movieService', movieService);
    app.controller('homecontroller', homeController);
    app.controller('movieDetailsController', movieDetailsController);
    app.directive('loader', loader);
    app.directive('header', header);
    app.filter("trustUrl", ['$sce', function ($sce) {
            return function (recordingUrl) {
                return $sce.trustAsResourceUrl(recordingUrl);
            };
        }]);
  }); 