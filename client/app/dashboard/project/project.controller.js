'use strict';

angular.module('projectDashboardMilesApp')
    .controller('ProjectCtrl', function ($scope, $http, $location, Upload, $routeParams, User, Project) {
        $scope.project = {};
        $scope.users = {};
        $scope.form = {}
        $scope.selectedFile=[]
    $scope.uploadUrl = "/api/projects/" + $routeParams.id + "/upload";

        $http.get("/api/projects/" + $routeParams.id)
            .success(function (project) {
                $scope.project = project;

                $scope.users.mockup = User.get({
                    id: $scope.project.stages.mockup.assigned
                })
                if ($scope.project.stages.functionality.assigned) {
                    $scope.users.functionality = User.get({
                        id: $scope.project.stages.functionality.assigned
                    })
                }
                if ($scope.project.stages.content.assigned) {
                    $scope.users.content = User.get({
                        id: $scope.project.stages.content.assigned
                    })
                }
            });


    $scope.taskCheck = function(task){
       task.isDone = true;
       Project.save({id: $routeParams.id}, $scope.project, function(res){
            })

    }

     $scope.uploadFile = function () {
                var file = $scope.selectedFile[0];
                $scope.upload = Upload.upload({
                    url: "/api/projects/" + $routeParams.id + "/upload",
                    method: 'POST',
                    data: angular.toJson($scope.form),
                    file: file
                }).progress(function (evt) {

                }).success(function (data) {
                    //do something
                });
            };



     $scope.onFileSelect = function ($files) {
         console.log($files);
                $scope.selectedFile = $files;
        };


    $scope.upload = function(form){
     console.log(form)

    }




    });
