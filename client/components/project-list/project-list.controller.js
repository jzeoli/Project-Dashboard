'use strict';

angular.module('projectDashboardMilesApp')
    .controller('ProjectListCtrl', function ($scope, $location, $http, Auth, socket) {

        $scope.projects = [];
        var projectsArray = [],
            onDeckArray = [];
        $scope.currentProjects = [];
        $scope.ondeckProjects = []

        $scope.seperateProjects = function (projects) {
            var cu = Auth.getCurrentUser();


            for (var i = 0; i < projects.length; i++) {

                $.each(projects[i].stages, function (index, value) {

                    if (value.assigned == cu._id) {
                        if (value.isActive) {
                            projectsArray.push(projects[i])
                        } else {

                            onDeckArray.push(projects[i])
                        }

                    }
                });


            }


            $scope.currentProjects = projectsArray;
            $scope.ondeckProjects = onDeckArray;
            console.log(projectsArray)

        }



        $http.get('/api/projects?all=true')
            .success(function (projects) {

                $scope.seperateProjects(projects);

                socket.syncUpdates('project', $scope.projects, function (event, item, object) {

                    $scope.seperateProjects([item]);

                });


            });

    });
