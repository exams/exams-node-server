'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * ClassNo Schema
 */
var ClassesSchema = new Schema({
  class_no: {
    type: Number
  },
  name_zh: {
    type: String,
    default: '',
    required: 'name_zh cannot be blank'
  },
  name_en: {
    type: String,
    default: '',
    required: 'name_en cannot be blank'
  }
});

mongoose.model('Classes', ClassesSchema);
