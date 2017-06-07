'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/tasks')
    .get(todoList.getAllTasks)
    .post(todoList.crtTask);

  app.route('/tasks/:taskId')
    .get(todoList.getTask)
    .put(todoList.updTask)
    .delete(todoList.delTask);
};