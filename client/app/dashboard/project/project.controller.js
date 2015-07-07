'use strict';

angular.module('projectDashboardMilesApp')
    .controller('ProjectCtrl', function ($scope, $http, $location, $routeParams, User) {
		$scope.project = {};
		$scope.users = {}

		$http.get("/api/projects/" + $routeParams.id)
		.success(function(project){
		$scope.project = project;
            $scope.users.mockup = User.get({id : $scope.project.stages.mockup.assigned})
            $scope.users.functionality = User.get({id : $scope.project.stages.functionality.assigned})
            $scope.users.content = User.get({id : $scope.project.stages.content.assigned})
		})
	});
