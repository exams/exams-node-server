'use strict';

/**
 * Module dependencies.
 */
var departmentLevelPolicy = require('../policies/departmentLevel.server.policy.js'),
  departmentLevel = require('../controllers/departmentLevel.server.controller.js');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/departmentLevel').all(departmentLevelPolicy.isAllowed)
    .post(departmentLevel.list)
    .get(departmentLevel.listDepartments);
};
