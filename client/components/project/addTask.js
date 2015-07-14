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

             element.children('.add-task').children('form').children('input[name=stage]').val(attrs.ngModel);

             element.children('a').on('click', function(){
                 var el = element.children('.add-task');

               if(el.is(':visible')){
                   el.hide();
                } else {
                    el.show();
                }

             });

         }

    };
  });
