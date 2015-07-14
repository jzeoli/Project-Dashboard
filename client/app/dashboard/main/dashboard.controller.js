'use strict';

angular.module('projectDashboardMilesApp')
    .controller('DashboardCtrl', function ($scope, Project) {






        $scope.projects = Project.query(function (result) {
            console.log(result)
            for (var project in result) {
                for (var key in result[project].stages) {
                    if (result[project].stages[key].isActive) {
                        $scope.projects[project].activeSection = result[project].stages[key];
                        $scope.projects[project].activeSection.totalTasks = result[project].stages[key].tasks.length;
                    }
                }


                if ($scope.projects[project].activeSection) {
                    for (var key in $scope.projects[project].activeSection.tasks) {
                        $scope.projects[project].activeSection.completedTasks = 0;
                        if ($scope.projects[project].activeSection.tasks[key].isDone) {
                            $scope.projects[project].activeSection.completedTasks++;
                        }
                    }


                }

            }
        });



    });
