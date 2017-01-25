app.controller('HeaderController', ['$scope','$location',
 	function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        		return $location.path().indexOf(viewLocation) == 0; 
		};
	}]);

app.controller('HomeCtrl', [ '$scope','$location', 
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
			},
			{
				nombre 	: "Nombre 7",
				pts		: 3.4,
			},
			{
				nombre: "Nombre 8",
				pts		: 4.4,
			}
		];

		 $scope.loadMore = function() {
			var last = $scope.boliches[$scope.boliches.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.boliches.push(last + i);
			}
		};
	}]);