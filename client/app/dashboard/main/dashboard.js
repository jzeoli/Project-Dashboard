'use strict';

angular.module('projectDashboardMilesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/dashboard/main/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      });
  });
