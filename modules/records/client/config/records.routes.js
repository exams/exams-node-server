'use strict';

// Setting up route
angular.module('records').config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('records', {
      url: '/records',
      templateUrl: 'modules/records/client/views/left.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.writing', {
      url: '/writing',
      templateUrl: 'modules/records/client/views/writing.edit.html',
      controller: ['$scope', '$stateParams', '$state',
        function ($scope, $stateParams, $state) {

        }]
    }).state('records.writing.show',{
      views:{
        '@records': {
          templateUrl: 'modules/records/client/views/writing.show.html',
          controller: ['$scope', '$stateParams', '$state',
            function ($scope, $stateParams, $state) {

            }]
        }
      }
    }).state('records.listening', {
      url: '/listening',
      templateUrl: 'modules/records/client/views/listening.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.listening-blank', {
      url: '/listening_blank',
      templateUrl: 'modules/records/client/views/listening-blank.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.cloze', {
      url: '/cloze',
      templateUrl: 'modules/records/client/views/cloze.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.reading-derive', {
      url: '/reading_long',
      templateUrl: 'modules/records/client/views/reading-derive.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.reading', {
      url: '/reading',
      templateUrl: 'modules/records/client/views/reading.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    }).state('records.translation', {
      url: '/translation',
      templateUrl: 'modules/records/client/views/translation.edit.html',
      controller: ['$scope', '$state',
        function ($scope, $state) {

        }]
    });
  }
]);
