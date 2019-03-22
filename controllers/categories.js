const Category = require('../models/category')

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
  Category
    .create(req.body)
    .then(category => res.status(201).json(category))
    .catch(next)
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
  categoriesIndex: categoriesIndexRoute,
  categoriesShow: categoriesShowRoute,
  categoriesCreate: categoriesCreateRoute,
  categoriesUpdate: categoriesUpdateRoute,
  categoriesDelete: categoriesDeleteRoute
}
