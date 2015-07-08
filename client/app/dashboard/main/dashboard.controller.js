'use strict';

angular.module('projectDashboardMilesApp')
  .controller('DashboardCtrl', function ($scope, Project) {

$scope.activeSection = {};

    $scope.projects = Project.query(function(result){
	for (var project in result){
		for (var key in result[project].stages){
			if(result[project].stages[key].isActive){
				$scope.activeSection = result[project].stages[key];
				$scope.activeSection.totalTasks = result[project].stages[key].tasks.length;
			}
		}
	}
	
	for (var key in  $scope.activeSection.tasks){
		$scope.activeSection.completedTasks = 0;
	if($scope.activeSection.tasks[key].isDone){
		$scope.activeSection.completedTasks++;
	}
	}
	
	});
	


  });
