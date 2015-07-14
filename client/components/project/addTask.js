'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('projectDashboardMilesApp')
  .directive('addTask', function () {
    return {
      restrict: 'E',
       templateUrl: 'components/project/addTask.html',
        controller:'AddTaskCtrl',
         link: function(scope, element, attrs, ngModel) {

             element.children('a').on('click', function(){
              //element.children('div').hide();
             });

         }

    };
  });
