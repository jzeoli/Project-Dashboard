'use strict';

angular.module('projectDashboardMilesApp')
  .factory('Project', function ($resource) {
    return $resource('/api/projects/:id/:controller', {
      id: '@_id'
    },
    {
      get: {
        method: 'GET',
      }
	  });
  });
