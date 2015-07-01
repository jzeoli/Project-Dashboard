'use strict';

angular.module('projectDashboardMilesApp')
    .controller('NewProjectCtrl', function ($scope, $http, $location, User) {

        $scope.project = {};
        $scope.errors = {};
		$scope.users = User.query();

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
							dueDate: $scope.project.mockupduedate,
                            assigned: $scope.userList._id
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
