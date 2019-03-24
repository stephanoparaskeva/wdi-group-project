const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Group = require('../models/group')
const Category = require('../models/category')
const Task = require('..models/task')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  const promiseArray = [
    User.create([
      {
        name: 'Matthew Whaley',
        username: 'matthew',
        email: 'matthew@email.com',
        password: 'password',
        isCurrentlyActive: true,
        isDormant: false
      },
      {timestamps: true},
      {
        name: 'Jess Barnes',
        username: 'jess',
        email: 'jess@email.com',
        password: 'password',
        isCurrentlyActive: true,
        isDormant: false
      },
      {timestamps: true},
      {
        name: 'Mary Caresa',
        username: 'mary',
        email: 'mary@email.com',
        password: 'password',
        isCurrentlyActive: true,
        isDormant: false
      },
      {timestamps: true},
      {
        name: 'Stephano Paraskeva',
        username: 'stephano',
        email: 'stephano@email.com',
        password: 'password',
        isCurrentlyActive: true,
        isDormant: false
      },
      {timestamps: true}
    ]),
    Group.create([
      {
        name: 'Jess Hen',
        description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza',
        createdBy: User[0],
        usersAssinged: [user[1], user[2], user[3]]
      },
      {timestamps: true},
      {
        name: 'Mary Hen',
        description: 'Yo girls. This is a group I set up to help organise Marys hen party in Miami',
        createdBy: user[1],
        usersAssinged: [user[0], user[2], user[3]]
      },
      {timestamps: true},
      {
        name: 'Matt Birthday',
        description: 'Boys, This is a group I set up to help organise Matts birthday party',
        createdBy: user[2],
        usersAssinged: [user[0], user[1], user[3]]
      },
      {timestamps: true},
      {
        name: 'Stephano',
        description: 'Lads, This is a group I set up to help organise Stephano\'s leaving party before he moves to mainland Greece',
        createdBy: user[3],
        usersAssinged: [user[0], user[1], user[2]]
      },
      {timestamps: true}
    ]),
    Category.create([
      {
        name: 'Travel',
        description: 'We need to arrange travel from Clapham to Ibiza',
        usersAssinged:[user[1], user[2], user[3]],
        createdBy: user[0],
        groupsAssigned: group[0]
      },
      {timestamps: true},
      {
        name: 'Drinks',
        description: 'We need to arrange drinks for the plane and when we are in Ibiza',
        usersAssinged:[user[1], user[2], user[3]],
        createdBy: user[0],
        groupsAssigned: group[0]
      },
      {timestamps: true},
      {
        name: 'Food',
        description: 'We need to arrange food for the plane and when we are in Ibiza',
        usersAssinged:[user[1], user[2], user[3]],
        createdBy: user[0],
        groupsAssigned: group[0]
      },
      {timestamps: true},
      {
        name: 'Hotel',
        description: 'We need to arrange hotels while in Ibiza',
        usersAssinged:[user[1], user[2], user[3]],
        createdBy: user[0],
        groupsAssigned: group[0]
      },
      {timestamps: true},
      {
        name: 'Travel',
        description: 'We need to arrange travel from London to Miami',
        usersAssinged:[user[0], user[2], user[3]],
        createdBy: user[1],
        groupsAssigned: group[1]
      },
      {timestamps: true},
      {
        name: 'Drinks',
        description: 'We need to arrange drinks for the plane and when we are in Miami',
        usersAssinged:[user[0], user[2], user[3]],
        createdBy: user[1],
        groupsAssigned: group[1]
      },
      {timestamps: true},
      {
        name: 'Food',
        description: 'We need to arrange food for the plane and when we are in Miami',
        usersAssinged:[user[0], user[2], user[3]],
        createdBy: user[1],
        groupsAssigned: group[1]
      },
      {timestamps: true},
      {
        name: 'Hotel',
        description: 'We need to arrange hotels while in Miami',
        usersAssinged:[user[0], user[2], user[3]],
        createdBy: user[1],
        groupsAssigned: group[1]
      },
      {timestamps: true},
      {
        name: 'Travel',
        description: 'We need to arrange travel to the birthday party',
        usersAssinged:[user[0], user[1], user[3]],
        createdBy: user[2],
        groupsAssigned: group[2]
      },
      {timestamps: true},
      {
        name: 'Drinks',
        description: 'We need to arrange drinks for the birthday party',
        usersAssinged:[user[0], user[1], user[3]],
        createdBy: user[2],
        groupsAssigned: group[2]
      },
      {timestamps: true},
      {
        name: 'Food',
        description: 'We need to arrange food for the bithday party',
        usersAssinged:[user[0], user[1], user[3]],
        createdBy: user[2],
        groupsAssigned: group[2]
      },
      {timestamps: true},
      {
        name: 'Hotel',
        description: 'We need to arrange hotels for the birthday party',
        usersAssinged:[user[0], user[1], user[3]],
        createdBy: user[2],
        groupsAssigned: group[2]
      },
      {timestamps: true},
      {
        name: 'Travel',
        description: 'We need to arrange travel to the bar',
        usersAssinged:[user[0], user[1], user[2]],
        createdBy: user[3],
        groupsAssigned: group[3]
      },
      {timestamps: true},
      {
        name: 'Drinks',
        description: 'We need to arrange drinks at the bar',
        usersAssinged:[user[0], user[1], user[2]],
        createdBy: user[3],
        groupsAssigned: group[3]
      },
      {timestamps: true},
      {
        name: 'Food',
        description: 'We need to arrange food at the bar',
        usersAssinged:[user[0], user[1], user[2]],
        createdBy: user[3],
        groupsAssigned: group[3]
      },
      {timestamps: true},
      {
        name: 'Hotel',
        description: 'We need to arrange hotels for after the party',
        usersAssinged:[user[0], user[1], user[2]],
        createdBy: user[3],
        groupsAssigned: group[3]
      },
      {timestamps: true}
    ])
  ]

  Promise.all(promiseArray)
    .then(data => {
      const [ user, group, category ] = data
      return Task.create,([
        {
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: user,
          createdBy: user._id,
          groupAssigned: group._id,
          isCurrent: true,
          category: category._id,
          comments: [{
            name: { type: String, required: true },
            description: {type: String },
            createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
          }, {
            timestamps: true
          }]
        },
        {timestamps: true}
      ])
    })
    .then(tasks => console.log(`${tasks.length} tasks created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
