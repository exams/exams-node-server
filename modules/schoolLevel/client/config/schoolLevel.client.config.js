'use strict';

// Configuring the Articles module
angular.module('schoolLevel').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'SchoolLevel',
      state: 'schoolLevel',
      roles: ['*']
    });
  }
]);
