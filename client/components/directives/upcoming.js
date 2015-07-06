'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('projectDashboardMilesApp')
  .directive('upcomingDeliverables', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {



      }
    };
  });
