const Group = require('../models/group')

function groupsIndex(req, res, next) {
  Group
    .find()
    .then(groups => res.status(200).json(groups))
    .catch(next)
}
function groupsShow(req, res, next) {
  Group
    .findById(req.params.groupId)
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
    .then(group => group.set(req.body))
    .then(group => group.save())
    .then(group => res.json(group))
    .catch(next)
}
function groupsDelete(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => group.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function categoriesIndexRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      return group.categories
    })
    .then(categories => res.status(200).json(categories))
    .catch(next)
}

function categoriesShowRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      return group.categories
    })
    .then(categories => {
      let categoryObj
      categories.forEach(category => {
        if (category._id.equals(req.params.categoryId)) {
          categoryObj = category
        }
      })
      return categoryObj
    })
    .then(category => res.status(200).json(category))
    .catch(next)
}


function categoriesCreateRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      group.categories.push(req.body)
      return group.save()
    })
    .then(group => res.status(200).json(group))
    .catch(next)
}

function categoriesUpdateRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      let categoryObj
      group.categories.forEach(category => {
        if (category._id.equals(req.params.categoryId)) {
          categoryObj = category
        }
      })
      return categoryObj
    })
    .then(category => category.set(req.body))
    .then(category => category.save())
    .then(category => res.status(200).json(category))
    .catch(next)
}

function categoriesDeleteRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      const comment = group.categories.id(req.params.categoryId)
      comment.remove()
      return group.save()
    })
    .then(group => res.json(group))
    .catch(next)
}

function tasksIndexRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      return group.tasks
    })
    .then(tasks => res.status(200).json(tasks))
    .catch(next)
}

function tasksShowRoute(req, res, next) {
  let taskObj
  Group
    .findById(req.params.groupId)
    .then(group => {
      group.tasks.forEach(task => {
        if (task._id.equals(req.params.taskId)) {
          taskObj = task
        }
      })
      return taskObj
    })
    .then(() => res.status(200).json(taskObj))
    .catch(next)
}

function tasksCreateRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      group.tasks.push(req.body)
      return group.save()
    })
    .then(group => res.status(200).json(group))
    .catch(next)
}

function tasksUpdateRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      let taskObj
      group.tasks.forEach(task => {
        if (task._id.equals(req.params.taskId)) {
          taskObj = task
        }
      })
      return taskObj
    })
    .then(task => task.set(req.body))
    .then(task => task.save())
    .then(task => res.status(200).json(task))
    .catch(next)
}

function tasksDeleteRoute(req, res, next) {
  Group
    .findById(req.params.groupId)
    .then(group => {
      const comment = group.tasks.id(req.params.taskId)
      comment.remove()
      return group.save()
    })
    .then(group => res.json(group))
    .catch(next)
}

function commentsCreateRoute(req, res, next) {
  let taskObj
  Group
    .findById(req.params.groupId)
    .then(group => {
      group.tasks.forEach(task => {
        if (task._id.equals(req.params.taskId)) {
          taskObj = task
        }
      })
        .then(() => taskObj.comments.push(req.body))
      return group.save()
    })
    .then(group => res.status(200).json(group))
    .catch(next)
}

// function commentsDeleteRoute(req, res, next) {
//   Cheese
//     .findById(req.params.groupId)
//     .then(group => {
//       const comment = group.tasks.comments.id(req.params.commentId)
//       comment.remove()
//       return cheese.save()
//     })
//     .then(cheese => res.json(cheese))
//     .catch(next)
// }

module.exports = {
  index: groupsIndex,
  show: groupsShow,
  create: groupsCreate,
  update: groupsUpdate,
  delete: groupsDelete,

  categoriesIndex: categoriesIndexRoute,
  categoriesShow: categoriesShowRoute,
  categoriesCreate: categoriesCreateRoute,
  categoriesUpdate: categoriesUpdateRoute,
  categoriesDelete: categoriesDeleteRoute,

  tasksIndex: tasksIndexRoute,
  tasksShow: tasksShowRoute,
  tasksCreate: tasksCreateRoute,
  tasksUpdate: tasksUpdateRoute,
  tasksDelete: tasksDeleteRoute,

  commentsCreate: commentsCreateRoute
}
