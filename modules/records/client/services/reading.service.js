'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('Reading', ['$resource',
  function ($resource) {
    return $resource('api/readings/:readingId', {
      writingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
