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
					stages: [{
                            name: "mockup",
							isDone: false,
                            isActive: true,
							tasks: [{task: "Mockup Approved", isDone: false}],
							dueDate: projD,
                            assigned: $scope.userList._id
						},
                         {
                            name: "functionality",
                            isDone: false,
                            isActive: false,
							tasks: [
							{task: "Homepage Complete", isDone: false},
							{task: "All Pages Created", isDone: false},
							{task: "Styled System Pages", isDone: false},
							{task: "Created HTML Sitemap", isDone: false},
							],
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                         {
                            name: "content",
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                      {
                            name: "UAT",
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        },
                        {
                            name: "QA",
                            isDone: false,
                            isActive: false,
                            dueDate: projD.setDate(projD.getDate() + 5)
                        }]
					}
                
                


                $http.post('/api/projects', projObj)
                    .success(function(){
                        $scope.project = {};

                        $location.path('/dashboard');
                    });

            }

        }



    });
