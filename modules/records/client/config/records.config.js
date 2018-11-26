'use strict';

// Configuring the Articles module
angular.module('records').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Records',
      state: 'records',
      roles: ['*']
    });
  }
]);
