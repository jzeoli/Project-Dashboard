'use strict';

angular.module('projectDashboardMilesApp')
    .controller('NewProjectCtrl', function ($scope, $http, $location, User,socket) {

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

                var projD = $scope.project.mockupduedate;
                var projObj = {
                    name: $scope.project.name,
                    info: $scope.project.info,
					stages: {
						mockup: {
							isDone: false,
                            isActive: true,
							dueDate: projD,
                            assigned: $scope.userList._id
						},
                        functionality: {
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                        content: {
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                        UAT: {
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                        QA: {
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
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
