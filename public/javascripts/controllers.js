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
				nombre 	: "Nombre 1",
				pts		: 3.4,
			},
			{
				nombre: "Nombre 2",
				pts		: 4.4,
			},
			{
				nombre 	: "Nombre 3",
				pts		: 3.4,
			},
			{
				nombre: "Nombre 4",
				pts		: 4.4,
			},
			{
				nombre 	: "Nombre 5",
				pts		: 3.4,
			},
			{
				nombre: "Nombre 6",
				pts		: 4.4,
			}
		]
	}]);