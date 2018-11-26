'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('Translation', ['$resource',
  function ($resource) {
    return $resource('api/translations/:translationId', {
      writingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
