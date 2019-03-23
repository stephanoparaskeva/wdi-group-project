
function groupLevelPermissions(req, res, next, action) {
  req.body.group = req.params.groupId
  req.body.createdBy = req.currentUser
  Group
    .findById(req.body.group)
    .then(group => {
      return group.usersAssigned.forEach(user => {
        if (user.equals(req.body.createdBy._id)) {
          console.log('true')
          return action
        } else {
          return res.json('Unauthorized')
        }
      })
    }).catch(next)
}

module.exports = {
  groupLevel: groupLevelPermissions
}
