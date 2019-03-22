const router = require('express').Router()
const { login, register } = require('../controllers/auth')
const groups = require('../controllers/groups')
const categories = require('../controllers/categories')
const tasks = require('../controllers/tasks')
const secureRoute = require('../lib/secureRoute')

router.route('/groups')
  .get(groups.index)
  .post(secureRoute, groups.create)

router.route('/groups/:groupId')
  .get(groups.show)
  .put(secureRoute, groups.update)
  .delete(secureRoute, groups.delete)
/////////////////////////////////////////

router.route('/groups/:groupId/categories')
  .get(categories.categoriesIndex)
  .post(secureRoute, categories.categoriesCreate)

router.route('/groups/:groupId/categories/:categoryId')
  .get(categories.categoriesShow)
  .put(secureRoute, categories.categoriesUpdate)
  .delete(secureRoute, categories.categoriesDelete)
////////////////////////////////////////

router.route('/groups/:groupId/tasks')
  .get(tasks.tasksIndex)
  .post(secureRoute, tasks.tasksCreate)

router.route('/groups/:groupId/tasks/:taskId')
  .get(tasks.tasksShow)
  .put(secureRoute, tasks.tasksUpdate)
  .delete(secureRoute, tasks.tasksDelete)

router.post('/groups/:groupId/tasks/:tasksId/comments', secureRoute, tasks.commentsCreate)
// router.delete('/groups/:groupId/tasks/:tasksId/comments/:commentId', secureRoute, groups.commentDelete)

router.post('/register', register)
router.post('/login', login)

module.exports = router
