'use strict';

angular.module('projectDashboardMilesApp')
    .controller('DashboardCtrl', function ($scope, Project, Auth) {

        $scope.activeProjects = [];




        Project.query(function (result) {

            console.log(result);
            for (var project in result) {

                for (var stage in result[project].stages) {

                    if (result[project].stages[stage].isActive && result[project].stages[stage].assigned == Auth.getCurrentUser()._id) {

                        var completedTasks;

                        for (var task in result[project].stages[stage].tasks) {
                            completedTasks = 0;

                            if (result[project].stages[stage].tasks[task].isDone) {
                                completedTasks++;
                            }
                        }

                        var obj = {
                            'name': result[project].name,
                            '_id': result[project]._id,
                            'stage': result[project].stages[stage],
                            'completedTasks': completedTasks,
                            'totalTasks': result[project].stages[stage].tasks.length

                        }

                        $scope.activeProjects.push(obj)



                    }

                }


            }


        });


    });
