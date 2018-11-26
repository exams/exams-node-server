'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('schoolLevel').factory('SchoolLevel', ['$resource',
  function ($resource) {
    return $resource('api/schoolLevel/:schoolLevelId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
