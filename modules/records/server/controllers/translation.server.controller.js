'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Translation = mongoose.model('Translation'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a translation
 */
exports.create = function (req, res) {
  var translation = new Translation(req.body);
  translation.user = req.user;

  translation.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(translation);
    }
  });
};

/**
 * Show the current translation
 */
exports.read = function (req, res) {
  res.json(req.translation);
};

/**
 * Update a translation
 */
exports.update = function (req, res) {
  var translation = req.translation;

  translation.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(translation);
    }
  });
};

/**
 * Delete a translation
 */
exports.delete = function (req, res) {
  var translation = req.translation;

  translation.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(translation);
    }
  });
};

/**
 * List of Translations
 */
exports.list = function (req, res) {
  Translation.find().sort('-created').populate('user', 'displayName').exec(function (err, translations) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(translations);
    }
  });
};

/**
 * Translation middleware
 */
exports.translationByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Translation is invalid'
    });
  }

  Translation.findById(id).populate('user', 'displayName').exec(function (err, translation) {
    if (err) {
      return next(err);
    } else if (!translation) {
      return res.status(404).send({
        message: 'No translation with that identifier has been found'
      });
    }
    req.translation = translation;
    next();
  });
};
