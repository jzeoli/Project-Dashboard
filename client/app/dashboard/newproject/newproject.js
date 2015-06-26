'use strict';

angular.module('projectDashboardMilesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newproject', {
        templateUrl: 'app/dashboard/newproject/newproject.html',
        controller: 'NewProjectCtrl',
        authenticate: true
      });
  });
