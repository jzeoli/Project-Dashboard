'use strict';

angular.module('projectDashboardMilesApp')
    .controller('NewProjectCtrl', function ($scope, $http, $location) {

        $scope.project = {};
        $scope.errors = {};
		

		$scope.switchTabs = function(tab){
			
			$('.tab-pane').hide();
			$('.nav-tabs li').removeClass('active');
			$('#' + tab).show();
			$('a[aria-controls="'+tab+'"]').parent().addClass('active');
		}

        $scope.addProject = function (form) {
            if (form.$valid) {
                var projObj = {
                    name: $scope.project.name,
                    info: $scope.project.info,
					stages: {
						mockup: {
							isDone: false,
							dueDate: $scope.project.mockupduedate		
						}
					}
                }

                $http.post('/api/projects', projObj)
                    .success(function(){
                        $scope.project = {};
                        $location.path('/dashboard');
                    });

            }

        }



    });
