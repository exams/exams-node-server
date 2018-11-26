'use strict';

// Setting up route
angular.module('departmentLevel').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('departmentLevel', {
        url: '/departmentLevel',
        templateUrl: 'modules/departmentLevel/client/views/report-departmentLevel.client.view.html'
      });
  }
]);
