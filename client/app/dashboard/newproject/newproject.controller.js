'use strict';

angular.module('projectDashboardMilesApp')
    .controller('NewProjectCtrl', function ($scope, $http, $location) {



        $scope.project = {};
        $scope.errors = {};


        $scope.addProject = function (form) {
            if (form.$valid) {
                var projObj = {
                    name: $scope.project.name,
                    info: $scope.project.info
                }

                $http.post('/api/projects', projObj)
                    .success(function(){
                        $scope.project = {};
                        $location.path('/dashboard');
                    });

            }

        }



    });
