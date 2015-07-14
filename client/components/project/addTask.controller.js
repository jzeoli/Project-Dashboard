'use strict';

angular.module('projectDashboardMilesApp')
    .controller('AddTaskCtrl', function ($scope) {

    $scope.newFormInput = {};


            $scope.addTask = function (form) {

                for (var i in $scope.project.stages) {
                    console.log($scope.newFormInput)

                    if ($scope.currentStage == $scope.project.stages[i]) {
                        console.log('here')
                        }
                    }

                };



            });
