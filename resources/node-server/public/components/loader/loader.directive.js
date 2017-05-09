define([], function(){
    function loader($http){
         return {
            restrict: 'E',
            link: function ($scope, element, attrs)
            {
                $scope.isLoading = function () {
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
            templateUrl: 'components/loader/loader.directive.html'
        };
    }

    loader.$inject=['$http'];

    return loader;

});