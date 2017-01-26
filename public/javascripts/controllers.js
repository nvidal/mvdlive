app.controller('HeaderController', ['$scope','$location',
 	function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        		return $location.path().indexOf(viewLocation) == 0; 
		};
	}]);

app.controller('HomeCtrl', [ '$scope','$location', '$resource',
 	function($scope, $location, $resource) {
		
		$scope.boliches = [];
		var Boliches = $resource('/boliches');
		Boliches.query(function(boliches){
			
			$scope.boliches = boliches;
		});

		 $scope.loadMore = function() {
			var last = $scope.boliches[$scope.boliches.length - 1];
			for(var i = 1; i <= 8; i++) {
				$scope.boliches.push(last + i);
			}
		};
	}]);


app.controller('BackOfficeCtrl', ['$scope', '$resource', '$location',
	function($scope, $resource, $location){

		$scope.boliches = [];
		var Boliches = $resource('/boliches');
		Boliches.query(function(boliches){
			
			$scope.boliches = boliches;
		});



	}]);

// ALTA DE Boliches
app.controller('AltaCtrl', ['$scope', '$resource', '$location', 
	function($scope, $resource, $location){

		$scope.modo ="alta";

		$scope.bolicheForm = function(isValid){

			if (isValid){
				var Boliches = $resource('/boliches/alta');
				Boliches.save($scope.bolicheEdicion, function(boliche){
					//alert('Boliche dado de alta con exito! '+ boliche.nombre);
					//$location.path('/editar/'+func._id);
					$scope.modo ="editar";
				});
			}
			else{
				$scope.showErrors = true;
			}
		};
	}]);

// CONTROLLER VER 
app.controller('VerBolicheCtrl', ['$scope', '$resource', '$location', '$routeParams',
	function($scope, $resource, $location, $routeParams){

		$scope.modo = "editar";
		var Boliche = $resource('/boliches/:id');
		Boliche.get({ id: $routeParams.id }, function(boliche){
			$scope.boliche = boliche;
		});
		
		$scope.mensajes = [
		{ 	mensaje: "una poronga no vengan",
			pts: 1,
			fecha: "13/7/2017"
		},
		{ 	mensaje: "Ha estado mejor. pero bueno es lo que hay hoy.",
			pts: 2,
			fecha: "13/7/2017"
		},
		{ 	mensaje: "Para un domingo a las 3 de la tarde, esto está muy bien.",
			pts: 3,
			fecha: "13/7/2017"
		},
		{ 	mensaje: "Saludos a la radio.",
			pts: 2,
			fecha: "13/7/2017"
		},
		{ 	mensaje: "Los de las balconeras, todos putos.",
			pts: 1,
			fecha: "13/7/2017"
		}];

	}]);
