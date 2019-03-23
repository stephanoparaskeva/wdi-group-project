const User = require('../models/user')

function usersIndex(req, res, next) {
  User
    .find()
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersShow(req, res, next) {
  User
    .findById(req.params.userId)
    .then(user => res.status(200).json(user))
    .catch(next)
}

function usersPending(req, res, next) {
  req.body.user = req.currentUser
  User
    .getPendingFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersAccepted(req, res, next) {
  req.body.user = req.currentUser
  User
    .getAcceptedFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersRequest(req, res, next) {
  req.body.user = req.currentUser
  User
    .requestFriend(req.body.user, req.params.userId)
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  request: usersRequest,
  allAccepted: usersAccepted,
  allPending: usersPending
}
