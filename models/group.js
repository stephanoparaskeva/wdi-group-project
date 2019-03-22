
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: { type: String },
  description: {type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  dateCreated: { type: Date, default: Date.now}
})

const taskSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  priority: { type: String },
  usersAssinged: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  groupAssigned: { type: mongoose.Schema.ObjectId, ref: 'Group' },
  isCurrent: { type: Boolean },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  dateCreated: { type: Date, default: Date.now },
  comments: [ commentSchema ]
})

const categorySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  usersAssinged: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  groupsAssigned: [{ type: mongoose.Schema.ObjectId, ref: 'Group' }]
}, {
  timestamps: true
})

const groupSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  usersAssinged: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  dateCreated: { type: Date, default: Date.now },
  categories: [ categorySchema ],
  tasks: [ taskSchema ]
})

module.exports = mongoose.model('Group', groupSchema)
