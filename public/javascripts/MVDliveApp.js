app = angular.module('MVDliveApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/index.html',
		controller : 'HomeCtrl'
	})
	.when('/verBoliche/:id', {
		templateUrl : 'partials/verBoliche.html',
		controller : 'VerBolicheCtrl'
	})
	.when('/back', {
		templateUrl : 'partials/back.html',
		controller : 'BackOfficeCtrl'
	})
	.when('/alta', {
		templateUrl : 'partials/alta.html',
		controller : 'AltaCtrl'
	})
	.otherwise({
		redirectTo : '/'
	})
}]);