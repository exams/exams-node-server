'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('Cloze', ['$resource',
  function ($resource) {
    return $resource('api/clozes/:clozeId', {
      clozeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
