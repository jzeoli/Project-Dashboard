'use strict';

angular.module('projectDashboardMilesApp')
    .controller('ProjectCtrl', function ($scope, $http, $location, $routeParams) {
		$scope.project = {};
		
		$http.get("/api/projects/" + $routeParams.id)
		.success(function(project){
		$scope.project = project;	
		})
	});