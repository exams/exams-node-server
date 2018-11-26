'use strict';

// Configuring the Articles module
angular.module('departmentLevel').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'DepartmentLevel',
      state: 'departmentLevel',
      roles: ['*']
    });
  }
]);
