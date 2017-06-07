'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  Subject: {
    type: String
  },
  Details: {
    type: String
  },
  Status: {
    type: String
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);