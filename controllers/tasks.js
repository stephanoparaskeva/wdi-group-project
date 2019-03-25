const Task = require('../models/task')
const Group = require('../models/group')
const permissions = require('../lib/permissions')

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
  // permissions.groupLevel(req, res, next, Task
  //   .create(req.body)
  //   .then(task => res.status(201).json(task))
  //   .catch(next))
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
  req.body.createdBy = req.currentUser
  Task
    .findById(req.params.taskId)
    .then(task => {
      task.comments.push(req.body)
      return task.save()
    })
    .then(task => res.json(task))
    .catch(next)
}

// function commentsDeleteRoute(req, res, next) {
//   Task
//     .findById(req.params.taskId)
//     .then(task => {
//       task.comments.forEach(comment => {
//         if (comment.createdBy.equals(req.currentUser._id)) {
//           const comment = task.comments.id(req.params.commentId)
//           comment.remove()
//           return task.save()
//         }
//       })
//     })
//     .then(task => res.json(task))
//     .catch(next)
// }

module.exports = {
  index: tasksIndexRoute,
  show: tasksShowRoute,
  create: tasksCreateRoute,
  update: tasksUpdateRoute,
  delete: tasksDeleteRoute,

  commentsCreate: commentsCreateRoute

}
