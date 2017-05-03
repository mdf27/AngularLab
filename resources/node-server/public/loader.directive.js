
moviecatApp.directive('loader',['$http' ,function ($http)
    {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                $scope.$watch($scope.isLoading, function (value)
                {
                    if(value){
                        $(element).show();
                    }else{
                        $(element).hide();
                    }
                });
            },
            templateUrl: 'templates/loader-template.html'
        };
}]);