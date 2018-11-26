'use strict';

//Writings service used for communicating with the writings REST endpoints
angular.module('records').factory('ListeningBlank', ['$resource',
  function ($resource) {
    return $resource('api/listening-blanks/:listeningBlankId', {
      writingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
