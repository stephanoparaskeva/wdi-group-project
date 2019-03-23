const Task = require('../models/task')
const Group = require('../models/group')

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
  req.body.createdBy = req.currentUser
  Group
    .findById(req.body.group)
    .then(group => {
      return group.usersAssigned.forEach(user => {
        console.log(user)
        console.log(req.body.createdBy._id)
        if (user.equals(req.body.createdBy._id)) {
          console.log('true')
          return Task
            .create(req.body)
            .then(task => res.status(201).json(task))
            .catch(next)
        } else {
          return res.json('Unauthorized')
        }
      })
    })
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
  index: tasksIndexRoute,
  show: tasksShowRoute,
  create: tasksCreateRoute,
  update: tasksUpdateRoute,
  delete: tasksDeleteRoute,

  commentsCreate: commentsCreateRoute

}
