'use strict';

angular.module('projectDashboardMilesApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $http) {
    $scope.errors = {};
     $scope.projects = {};


      $http.get('/api/projects?all=true')
    .success(function(projects){

        $scope.projects = projects;

    });


    $scope.addProject = function(id){

        $http.put('/api/users/me/project', { projectid: id })
        .success(function(){
            var index = $scope.projects.indexOf($scope.projectList);



            if (index > -1) {
    $scope.projects.splice(index, 1);
}

        })



    };


    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};



  });
