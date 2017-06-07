'use strict';
var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.getTask = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.getAllTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.crtTask = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.updTask = function(req, res) {
  Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.delTask = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json({ message: 'Deleted Successfully' });
  });
};