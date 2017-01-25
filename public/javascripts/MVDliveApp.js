app = angular.module('MVDliveApp', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/index.html',
		controller : 'HomeCtrl'
	})
	.otherwise({
		redirectTo : '/'
	})
}]);