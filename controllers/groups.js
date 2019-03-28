const Group = require('../models/group')

function groupsIndex(req, res, next) {
  Group
    .find()
    .sort({'_id': -1})
    .populate('groupTasks')
    .then(groups => res.status(200).json(groups))
    .catch(next)
}

function groupsShow(req, res, next) {
  Group
    .findById(req.params.groupId)
    .populate('groupTasks')
    .then(group => res.status(200).json(group))
    .catch(next)
}

function groupsCreate(req, res, next) {
  req.body.createdBy = req.currentUser
  Group
    .create(req.body)
    .then(group => res.status(201).json(group))
    .catch(next)
}

function groupsUpdate(req, res, next) {
  Group
    .findById(req.params.groupId)
    .populate('groupTasks')
    .then(group => group.set(req.body))
    .then(group => group.save())
    .then(group => res.json(group))
    .catch(next)
}
function groupsDelete(req, res, next) {
  Group
    .findById(req.params.groupId)
    .populate('groupTasks')
    .then(group => group.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: groupsIndex,
  show: groupsShow,
  create: groupsCreate,
  update: groupsUpdate,
  delete: groupsDelete
}
