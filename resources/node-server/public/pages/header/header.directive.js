define([], function(){
	function header(){
		return {
			restrict: 'A', 
	        replace: true,        
	        templateUrl: "pages/header/header.directive.html",
	        controller: ['$scope',  function ($scope) {
	        	$scope.items = [];
	            $scope.showBagContent = function(event){
	            	let bag = $(".bag");
	            	if(bag.css('display') === 'none'){
                        bag.css({
				  			display: "block"
				  		})				  		
					}else {
						bag.css({
				  			display: "none"
				  		})
					}
				};	
				$scope.$on('addToBag' , function(event, data){			
				 	$scope.items.push({
				 			num: $scope.items.length + 1,
				 			title: data.title
				 		})
				 	}
				);
	        }]
		}
	}
	return header;
});