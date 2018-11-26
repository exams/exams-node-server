'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('departmentLevel').factory('DepartmentLevel', ['$resource',
  function ($resource) {
    return $resource('api/departmentLevel/:departmentLevelId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
