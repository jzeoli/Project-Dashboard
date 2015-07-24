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

                var isActive = false;
                var isInactive = false;



                $.each(projects[i].stages, function (index, value) {

                    if (value.assigned == cu._id) {
                        if (value.isActive) {
                            isActive = true;
                        }  else {
                             isInactive = true;
                        }
                    }

                });

                if (isActive == true) {
                    projectsArray.push(projects[i])
                } else if(isInactive == true) {
                    onDeckArray.push(projects[i])
                }

            }



            function uniqueArray(a){
             var uniqueArray = [];

                for (var item in a){
                 if(uniqueArray == []){
                    uniqueArray.push(a[item]);
                 } else {
                       var isUnique = true;
                     for (var x in uniqueArray){
                         if(uniqueArray[x]._id == a[item]._id){
                             isUnique = false
                         }

                     }

                     if (isUnique){
                         uniqueArray.push(a[item])

                     }

                 }

                }

                return uniqueArray;
            }

            $scope.currentProjects = uniqueArray(projectsArray);
            $scope.ondeckProjects =  uniqueArray(onDeckArray);

        }



        $http.get('/api/projects?all=true')
            .success(function (projects) {

                $scope.seperateProjects(projects);


            //NEED TO FIX THIS
                socket.syncUpdates('project', $scope.projects, function (event, item, object) {
                    $scope.seperateProjects([item]);
                });


            });

    });
