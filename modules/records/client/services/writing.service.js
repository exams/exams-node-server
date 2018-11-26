'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('Writing', ['$resource',
  function ($resource) {
    return $resource('api/writings/:writingId', {
      writingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
