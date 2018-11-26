'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Classes = mongoose.model('Classes'),
  Evaluation = mongoose.model('Evaluation'),
  Teachers = mongoose.model('Teachers'),
  Departments = mongoose.model('Departments'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Evaluation.find(req.body).exec(function (err, departmentLevel) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(departmentLevel);
    }
  });
};

/**
 * List of Departments
 */
exports.listDepartments = function (req, res) {
  Departments.find().exec(function (err, departments) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(departments);
    }
  });
};
