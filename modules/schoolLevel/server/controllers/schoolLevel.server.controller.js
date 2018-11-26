'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Classes = mongoose.model('Classes'),
  Evaluation = mongoose.model('Evaluation'),
  Teachers = mongoose.model('Teachers'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Teachers.find().select('XB').exec(function (err, schoolLevel) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(schoolLevel);
    }
  });
};
