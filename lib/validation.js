const validate = require('mongoose-validator')
const { isValidPassword } = require('mongoose-custom-validators')

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 100],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters.'
  }),
  validate({
    validator: 'isEmail',
    isAsync: true,
    message: '{VALUE} is not a valid email.'
  })
]

const passwordValidator = [
  validate({
    validator: isValidPassword,
    message: 'Password must contain 1 of each: lowercase, uppercase, special and numeric characters.'
  }),
  validate({
    validator: 'isLength',
    arguments: [5, 20],
    message: 'Invalid password length.'
  })
]

const usernameValidator = [
  validate({
    validator: 'isAlphanumeric',
    message: 'Username can only contain numbers and letters.'
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 20],
    message: 'Invalid username length.'
  })
]

module.exports = {
  email: emailValidator,
  password: passwordValidator,
  username: usernameValidator
}
