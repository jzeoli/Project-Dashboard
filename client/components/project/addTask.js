'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('projectDashboardMilesApp')
  .directive('addTask', function () {
    return {
      restrict: 'E',
       templateUrl: 'components/project/addTask.html'
    };
  });
