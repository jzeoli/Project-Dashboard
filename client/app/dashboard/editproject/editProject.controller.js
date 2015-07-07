'use strict';

angular.module('projectDashboardMilesApp')
    .controller('EditProjectCtrl', function ($scope, $http, $location, $routeParams, User, Project) {

		$scope.project = {};
		$scope.users = User.query();
		
		
		
		$scope.updateProject = function(form) {
			
			if (form.$valid) {
				
				
			}
			
			
		}




		$scope.save = function(){
			console.log('here')
		$scope.project.$save;	
			
		}




	});