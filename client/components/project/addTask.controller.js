'use strict';

angular.module('projectDashboardMilesApp')
    .controller('AddTaskCtrl', function ($scope, Project) {

        $scope.newFormInput = {};


        $scope.addTask = function (form) {


            for (var i in $scope.project.stages) {
                if ($scope.project.stages[i].name == $scope.stage) {
                    $scope.project.stages[i].tasks.push({
                        task: $scope.newTask,
                        isDone:false
                    })

                    Project.save({id: $scope.project._id}, $scope.project, function(res){

                        $scope.newTask = ""
            })

                }

            };

        };

    });
