'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * ClassNo Schema
 */
var DepartmentSchema = new Schema({
  ID: {
    type: String
  },
  XYQC: {
    type: String
  },
  XYJC: {
    type: String
  },
  XYB: {
    type: String
  }
});

mongoose.model('Departments', DepartmentSchema);
