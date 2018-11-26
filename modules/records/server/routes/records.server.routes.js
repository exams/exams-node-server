'use strict';

/**
 * Module dependencies.
 */
var writingsPolicy = require('../policies/writing.server.policy'),
  translationsPolicy = require('../policies/translation.server.policy'),
  readingsPolicy = require('../policies/reading.server.policy'),
  readingDerivesPolicy = require('../policies/reading-derive.server.policy'),
  listeningsPolicy = require('../policies/listening.server.policy'),
  listeningBlanksPolicy = require('../policies/listening-blank.server.policy'),
  clozesPolicy = require('../policies/cloze.server.policy'),
  writing = require('../controllers/writing.server.controller'),
  translation = require('../controllers/translation.server.controller'),
  reading = require('../controllers/reading.server.controller'),
  readingDerive = require('../controllers/reading-derive.server.controller'),
  listening = require('../controllers/listening.server.controller'),
  listeningBlank = require('../controllers/listening-blank.server.controller'),
  cloze = require('../controllers/cloze.server.controller');

module.exports = function (app) {
  // Writings collection routes
  app.route('/api/writings').all(writingsPolicy.isAllowed)
    .get(writing.list)
    .post(writing.create);

  // Single writing routes
  app.route('/api/writings/:writingId').all(writingsPolicy.isAllowed)
    .get(writing.read)
    .put(writing.update)
    .delete(writing.delete);

  // Finish by binding the writing middleware
  app.param('writing', writing.writingByID);

  // Translations collection routes
  app.route('/api/translations').all(translationsPolicy.isAllowed)
      .get(translation.list)
      .post(translation.create);

  // Single translation routes
  app.route('/api/translations/:translationsId').all(translationsPolicy.isAllowed)
      .get(translation.read)
      .put(translation.update)
      .delete(translation.delete);

  // Finish by binding the translation middleware
  app.param('translation', translation.translationByID);

  // Readings collection routes
  app.route('/api/readings').all(readingsPolicy.isAllowed)
      .get(reading.list)
      .post(reading.create);

  // Single reading routes
  app.route('/api/readings/:readingId').all(readingsPolicy.isAllowed)
      .get(reading.read)
      .put(reading.update)
      .delete(reading.delete);

  // Finish by binding the reading middleware
  app.param('reading', reading.readingByID);

  // ReadingDerives collection routes
  app.route('/api/reading-derives').all(readingDerivesPolicy.isAllowed)
      .get(readingDerive.list)
      .post(readingDerive.create);

  // Single readingDerive routes
  app.route('/api/reading-derives/:readingDeriveId').all(readingDerivesPolicy.isAllowed)
      .get(readingDerive.read)
      .put(readingDerive.update)
      .delete(readingDerive.delete);

  // Finish by binding the readingDerive middleware
  app.param('readingDerive', readingDerive.readingDeriveByID);

  // Listening collection routes
  app.route('/api/listenings').all(listeningsPolicy.isAllowed)
      .get(listening.list)
      .post(listening.create);

  // Single listening routes
  app.route('/api/listenings/:listeningId').all(listeningsPolicy.isAllowed)
      .get(listening.read)
      .put(listening.update)
      .delete(listening.delete);

  // Finish by binding the listening middleware
  app.param('listening', listening.listeningByID);

  // ListeningBlank collection routes
  app.route('/api/listening-blanks').all(listeningBlanksPolicy.isAllowed)
      .get(listeningBlank.list)
      .post(listeningBlank.create);

  // Single listeningBlank routes
  app.route('/api/listening-blanks/:listeningBlankId').all(listeningBlanksPolicy.isAllowed)
      .get(listeningBlank.read)
      .put(listeningBlank.update)
      .delete(listeningBlank.delete);

  // Finish by binding the listeningBlank middleware
  app.param('listeningBlank', listeningBlank.listeningBlankByID);

  // Cloze collection routes
  app.route('/api/clozes').all(clozesPolicy.isAllowed)
      .get(cloze.list)
      .post(cloze.create);

  // Single cloze routes
  app.route('/api/clozes/:clozeId').all(clozesPolicy.isAllowed)
      .get(cloze.read)
      .put(cloze.update)
      .delete(cloze.delete);

  // Finish by binding the cloze middleware
  app.param('cloze', cloze.clozeByID);
};
