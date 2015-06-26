'use strict';

angular.module('projectDashboardMilesApp')
  .controller('ProjectListCtrl', function ($scope, $location, $http, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;


    $http.get('/api/projects/user/' + $scope.getCurrentUser()._id)
    .success(function(projects){
       console.log(projects)
    });


  });
