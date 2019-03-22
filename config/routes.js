const router = require('express').Router()
const { login, register } = require('../controllers/auth')
const groups = require('../controllers/groups')
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
  .get(groups.categoriesIndex)
  .post(secureRoute, groups.categoriesCreate)

router.route('/groups/:groupId/categories/:categoryId')
  .get(groups.categoriesShow)
  .put(secureRoute, groups.categoriesUpdate)
  .delete(secureRoute, groups.categoriesDelete)
////////////////////////////////////////

router.route('/groups/:groupId/tasks')
  .get(groups.tasksIndex)
  .post(secureRoute, groups.tasksCreate)

router.route('/groups/:groupId/tasks/:taskId')
  .get(groups.tasksShow)
  .put(secureRoute, groups.tasksUpdate)
  .delete(secureRoute, groups.tasksDelete)

router.post('/groups/:groupId/tasks/:tasksId/comments', secureRoute, groups.commentsCreate)
// router.delete('/groups/:groupId/tasks/:tasksId/comments/:commentId', secureRoute, groups.commentDelete)

router.post('/register', register)
router.post('/login', login)

module.exports = router
