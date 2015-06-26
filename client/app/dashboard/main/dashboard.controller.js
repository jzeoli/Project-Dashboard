'use strict';

angular.module('projectDashboardMilesApp')
  .controller('DashboardCtrl', function ($scope, $http) {

    $scope.projects = {}
    $http.get('/api/projects')
    .success(function(projects){
        $scope.projects = projects;
    });


  });
