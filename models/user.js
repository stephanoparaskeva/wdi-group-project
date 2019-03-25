const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const friendsPlugin = require('mongoose-friends-plugin')

const { username, email, password } = require('../lib/validation')

const userSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true, validate: username },
  email: { type: String, unique: true, required: true, validate: email },
  password: { type: String, required: true, validate: password },
  isCurrentlyActive: { type: Boolean },
  isDormant: { type: Boolean }
}, {
  timestamps: true
})

userSchema.plugin(require('mongoose-unique-validator'))
userSchema.plugin(friendsPlugin({ pathName: 'friends' }))

// anytime my user model is requested I want it to remove the password
// from what is sent back
userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

// a method that will live on our user model and will be callable by us in the controller,
// it will determine whether the password provided to us on login matches the hashed password in our database.
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

//  our virtual field to set a password confirmation when we need to check it
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// this function runs before mongoose validates our model, to check if the password and password confirmation sent match
userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

// this will run before the model is saved to our db, it the password hasbeen newly created or changed it will hash it for us
userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password  = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

module.exports = mongoose.model('User', userSchema)
