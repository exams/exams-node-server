'use strict';

/**
 * Module dependencies.
 */
var schoolLevelPolicy = require('../policies/schoolLevel.server.policy.js'),
  schoolLevel = require('../controllers/schoolLevel.server.controller.js');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/schoolLevel').all(schoolLevelPolicy.isAllowed)
    .get(schoolLevel.list);
};
