'use strict';

angular.module('projectDashboardMilesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editProject/:id', {
        templateUrl: 'app/dashboard/editproject/editProject.html',
        controller: 'EditProjectCtrl',
        authenticate: true
      });
  });
