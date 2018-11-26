'use strict';

// Setting up route
angular.module('schoolLevel').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('schoolLevel', {
        url: '/schoolLevel',
        templateUrl: 'modules/schoolLevel/client/views/report-schoolLevel.client.view.html'
      });
  }
]);
