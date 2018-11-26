'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Writing = mongoose.model('Writing'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a writing
 */
exports.create = function (req, res) {
  //
  var writing = new Writing(req.body);
  writing.user = req.user;

  writing.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(writing);
    }
  });
};

/**
 * Show the current writing
 */
exports.read = function (req, res) {
  res.json(req.writing);
};

/**
 * Update a writing
 */
exports.update = function (req, res) {
  var writing = req.writing;

  writing.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(writing);
    }
  });
};

/**
 * Delete an writing
 */
exports.delete = function (req, res) {
  var writing = req.writing;

  writing.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(writing);
    }
  });
};

/**
 * List of Writings
 */
exports.list = function (req, res) {
  Writing.find().sort('-created').populate('user', 'displayName').exec(function (err, writings) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(writings);
    }
  });
};

/**
 * Writing middleware
 */
exports.writingByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Writing is invalid'
    });
  }

  Writing.findById(id).populate('user', 'displayName').exec(function (err, writing) {
    if (err) {
      return next(err);
    } else if (!writing) {
      return res.status(404).send({
        message: 'No writing with that identifier has been found'
      });
    }
    req.writing = writing;
    next();
  });
};
