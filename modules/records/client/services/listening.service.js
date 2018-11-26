'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('Listening', ['$resource',
  function ($resource) {
    return $resource('api/listenings/:listeningsId', {
      listeningsId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
