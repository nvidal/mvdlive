app = angular.module('MVDliveApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/index.html',
		controller : 'HomeCtrl'
	})
	.when('/list', {
		templateUrl : 'views/list.html',
		controller : 'PlayerCtrl'
	})
	/*.when('/password', {
		templateUrl : 'views/password.html',
		controller : 'PasswordCtrl'
	})*/
	.when('/historial', {
		templateUrl : 'views/historial.html',
		controller : 'HistorialCtrl'
	})
	.when('/edit/:id', {
		templateUrl : 'views/edit-player.html',
		controller : 'PlayerEditCtrl'
		})
	.when('/create', {
		templateUrl : 'views/form-player.html',
		controller : 'PlayerCtrl'
	})
	.when('/mejor11', {
		templateUrl : 'views/mejor11.html',
		controller : 'MejorEquipoCtrl'
	})
	.otherwise({
		redirectTo : '/'
	})
}]);