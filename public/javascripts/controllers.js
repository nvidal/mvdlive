app.controller('HeaderController', ['$scope','$location',
 	function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        		return $location.path().indexOf(viewLocation) == 0; 
		};
	}]);

app.controller('HomeCtrl', ['$scope','$location',
 	function($scope, $location) {
		
		$scope.boliches = [
			{
				nombre 	: "Boliche 1",
				pts		: 3.4,
			},
			{
				nombre: "Boliche 3",
				pts		: 4.4,
			},
			{
				nombre 	: "Boliche 1",
				pts		: 3.4,
			},
			{
				nombre: "Boliche 3",
				pts		: 4.4,
			},
			{
				nombre 	: "Boliche 1",
				pts		: 3.4,
			},
			{
				nombre: "Boliche 3",
				pts		: 4.4,
			}
		]
	}]);