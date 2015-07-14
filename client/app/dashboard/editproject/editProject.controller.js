'use strict';

angular.module('projectDashboardMilesApp')
    .controller('EditProjectCtrl', function ($scope, $http, $location, $routeParams, User, Project) {

		$scope.project = Project.get({id: $routeParams.id})
		$scope.users = User.query();
		
		
		
		$scope.save = function(){
			Project.save({id: $routeParams.id}, $scope.project, function(res){
            })
			
		}



	});
