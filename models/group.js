
const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  usersAssigned: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

groupSchema.virtual('groupTasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'group'
})

groupSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Group', groupSchema)

// ```userSchema.virtual('myPosts', {
//   ref: 'Post',
//   localField: '_id',
//   foreignField: 'addedBy'
// })
//
// userSchema.set('toJSON', {
//   virtuals: true
// })```
//
// and you then need to populate the virtual in the controller like so:
// ```function indexRoute(req, res, next) {
//   User
//     .find()
//     .populate('myPosts')
//     .select('-password')
//     .exec()
//     .then(users => res.json(users))
//     .catch(next)
// }```
