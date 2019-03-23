const Category = require('../models/category')
const Group = require('../models/group')

function categoriesIndexRoute(req, res, next) {
  Category
    .find()
    .then(categories => res.status(200).json(categories))
    .catch(next)
}

function categoriesShowRoute(req, res, next) {
  Category
    .findById(req.params.categoryId)
    .then(category => res.status(200).json(category))
    .catch(next)
}


function categoriesCreateRoute(req, res, next) {
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
          return Category
            .create(req.body)
            .then(category => res.status(201).json(category))
            .catch(next)
        } else {
          return res.json('Unauthorized')
        }
      })
    }).catch(next)
}

function categoriesUpdateRoute(req, res, next) {
  Category
    .findById(req.params.categoryId)
    .then(category => category.set(req.body))
    .then(category => category.save())
    .then(category => res.status(200).json(category))
    .catch(next)
}

function categoriesDeleteRoute(req, res, next) {
  Category
    .findById(req.params.categoryId)
    .then(category => category.remove())
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  index: categoriesIndexRoute,
  show: categoriesShowRoute,
  create: categoriesCreateRoute,
  update: categoriesUpdateRoute,
  delete: categoriesDeleteRoute
}
