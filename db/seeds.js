const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Group = require('../models/group')
const Category = require('../models/category')
const Task = require('..models/task')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  User.create({
    name: 'Matthew Whaley',
    username: 'matthew',
    email: 'matthew@email.com',
    password: 'password',
    isCurrentlyActive: true,
    isDormant: { type: Boolean }
  })
    .then(user => {
      return Group.create({
          name: 'Jess Hen',
          description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza',
          usersAssinged: [user]
        }
      )
    })
      .then(group => {
        return Category.create([
          {
          name: 'Travel',
          description: 'We need to arrange travel from Clapham to Ibiza',
          usersAssinged: user,
          createdBy: user._id,
          groupsAssigned: group.id
        },
        {timestamps: true}
        ])
        .then(category => {
          return Task.create({
            name: 'Book flights',
            description: 'Books flights from London to Ibiza',
            priority: 'High',
            usersAssinged: user._id,
            createdBy: user._id,
            groupAssigned: group._id,
            isCurrent: true,
            category: category._id
            // comments: [ commentSchema ]
          },
          {timestamps: true}
})






      //   {
      //     name: 'Marys Hen',
      //     description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Miami',
      //     usersAssinged: user._id,
      //     user
      //   },
      //   {timestamps: true}
      // ])
    // })
    // .then(users => console.log(`${cheeses.length} cheeses created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
