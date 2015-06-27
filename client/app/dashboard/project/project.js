'use strict';


angular.module('projectDashboardMilesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:id', {
        templateUrl: 'app/dashboard/project/project.html',
        controller: 'ProjectCtrl',
        authenticate: true
      });
  });
