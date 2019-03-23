const router = require('express').Router()
const { login, register } = require('../controllers/auth')
const groups = require('../controllers/groups')
const categories = require('../controllers/categories')
const tasks = require('../controllers/tasks')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

//groups
router.route('/groups')
  .get(groups.index)
  .post(secureRoute, groups.create)

router.route('/groups/:groupId')
  .get(groups.show)
  .put(secureRoute, groups.update)
  .delete(secureRoute, groups.delete)

// tasks
router.route('/groups/:groupId/tasks')
  .get(tasks.index)
  .post(secureRoute, tasks.create)

router.route('/groups/:groupId/tasks/:taskId')
  .get(tasks.show)
  .put(secureRoute, tasks.update)
  .delete(secureRoute, tasks.delete)

//categories
router.route('/groups/:groupId/categories')
  .get(categories.index)
  .post(secureRoute, categories.create)

router.route('/groups/:groupId/categories/:categoryId')
  .get(categories.show)
  .put(secureRoute, categories.update)
  .delete(secureRoute, categories.delete)

router.post('/groups/:groupId/tasks/:taskId/comments', secureRoute, tasks.commentsCreate)
// router.delete('/groups/:groupId/tasks/:tasksId/comments/:commentId', secureRoute, groups.commentDelete)

router.route('/users')
  .get(secureRoute, users.index)

router.route('/users/:userId')
  .get(secureRoute, users.show)

router.route('/users/:userId/request')
  .post(secureRoute, users.request)

router.route('/users/pending')
  .post(secureRoute, users.allPending)

router.route('/users/accepted')
  .post(secureRoute, users.allAccepted)

router.post('/register', register)
router.post('/login', login)

module.exports = router
