'use strict';

angular.module('projectDashboardMilesApp')
  .controller('ProjectListCtrl', function ($scope, $location, $http) {

     $scope.projects = {}
    $http.get('/api/projects')
    .success(function(projects){
        $scope.projects = projects;
    });


  });
