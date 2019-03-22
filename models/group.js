
const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  usersAssinged: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Group', groupSchema)
