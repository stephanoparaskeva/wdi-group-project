const Task = require('../models/task')

function tasksIndexRoute(req, res, next) {
  Task
    .find()
    .then(tasks => res.status(200).json(tasks))
    .catch(next)
}

function tasksShowRoute(req, res, next) {
  Task
    .findById(req.params.taskId)
    .then(task => res.status(200).json(task))
    .catch(next)
}

function tasksCreateRoute(req, res, next) {
  req.body.group = req.params.groupId
  Task
    .create(req.body)
    .then(task => res.status(201).json(task))
    .catch(next)
}

function tasksUpdateRoute(req, res, next) {
  Task
    .findById(req.params.taskId)
    .then(task => task.set(req.body))
    .then(task => task.save())
    .then(task => res.status(200).json(task))
    .catch(next)
}

function tasksDeleteRoute(req, res, next) {
  Task
    .findById(req.params.taskId)
    .then(task => {
      task.remove()
      res.sendStatus(200)
    })
    .catch(next)
}

function commentsCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Task
    .findById(req.params.taskId)
    .then(task => {
      task.comments.push(req.body)
      return task.save()
    })
    .then(task => res.json(task))
    .catch(next)
}



module.exports = {
  tasksIndex: tasksIndexRoute,
  tasksShow: tasksShowRoute,
  tasksCreate: tasksCreateRoute,
  tasksUpdate: tasksUpdateRoute,
  tasksDelete: tasksDeleteRoute,

  commentsCreate: commentsCreateRoute

}
