'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('ReadingDerive', ['$resource',
  function ($resource) {
    return $resource('api/reading-derives/:readingDeriveId', {
      writingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
