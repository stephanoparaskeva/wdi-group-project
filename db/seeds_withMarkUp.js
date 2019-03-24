const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Group = require('../models/group')
const Category = require('../models/category')
const Task = require('..models/task')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
  // First I have deleted all the calls to timestamps, these should be on the model and are created automatically, the seeds don't need to be told

  // So first we create are users because they are needed before we can create groups, with what you had before, the users don't exist until that first then block has run, its why the linter was kicking off, no concept of `users` yet.
  User.create([
    {
      name: 'Matthew Whaley',
      username: 'matthew',
      email: 'matthew@email.com',
      password: 'password',
      isCurrentlyActive: true,
      isDormant: false
    },
    {
      name: 'Jess Barnes',
      username: 'jess',
      email: 'jess@email.com',
      password: 'password',
      isCurrentlyActive: true,
      isDormant: false
    },
    {
      name: 'Mary Caresa',
      username: 'mary',
      email: 'mary@email.com',
      password: 'password',
      isCurrentlyActive: true,
      isDormant: false
    },
    {
      name: 'Stephano Paraskeva',
      username: 'stephano',
      email: 'stephano@email.com',
      password: 'password',
      isCurrentlyActive: true,
      isDormant: false
    }
  ])
    .then(users => {
    // so now at this point we do have created users and can use them to create the groups

    // but now a new problem arises we need the next then block to know about groups and users, this can get a little tricky, because of scope, the block after this one wont actually remember that users array created previously.


    // So its actually here that im going to return a promise array, so I can pass both the groups and the users on

    // take a look at this promise all below, the promise array contains two items, first the call to groups create at index 0, and users at index 1
      return Promise.all([
        Group.create([
          {
            name: 'Jess Hen',
            description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza',
            createdBy: users[0],
            usersAssinged: [users[1], users[2], users[3]]
          },
          {
            name: 'Mary Hen',
            description: 'Yo girls. This is a group I set up to help organise Marys hen party in Miami',
            createdBy: users[1],
            usersAssinged: [users[0], users[2], users[3]]
          },
          {
            name: 'Matt Birthday',
            description: 'Boys, This is a group I set up to help organise Matts birthday party',
            createdBy: users[2],
            usersAssinged: [users[0], users[1], users[3]]
          },
          {
            name: 'Stephano',
            description: 'Lads, This is a group I set up to help organise Stephano\'s leaving party before he moves to mainland Greece',
            createdBy: users[3],
            usersAssinged: [users[0], users[1], users[2]]
          }
        ]),
        users
      ])
      // So here is where I am passing the users argument through with the promise array to the next then block
    })
    .then(data => {
      // now this data argument above is the result of that promise call, if you console.log it out you'll see that
      const [ users, groups] = data
      // I can deconstruct them off the array again now like above and now I have access to both

      // because your tasks are gonna want to refernce both of these, and the categories im gonna make now, we're gonna have to do this step again, check out then of this promise all array, youll see me pass the users and groups on with these categories

      return Promise.all([
        Category.create([
          {
            name: 'Travel',
            description: 'We need to arrange travel from Clapham to Ibiza',
            usersAssinged: [users[1], users[2], users[3]],
            createdBy: users[0],
            groupsAssigned: groups[0]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the plane and when we are in Ibiza',
            usersAssinged: [users[1], users[2], users[3]],
            createdBy: users[0],
            groupsAssigned: groups[0]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the plane and when we are in Ibiza',
            usersAssinged: [users[1], users[2], users[3]],
            createdBy: users[0],
            groupsAssigned: groups[0]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels while in Ibiza',
            usersAssinged: [users[1], users[2], users[3]],
            createdBy: users[0],
            groupsAssigned: groups[0]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel from London to Miami',
            usersAssinged: [users[0], users[2], users[3]],
            createdBy: users[1],
            groupsAssigned: groups[1]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the plane and when we are in Miami',
            usersAssinged: [users[0], users[2], users[3]],
            createdBy: users[1],
            groupsAssigned: groups[1]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the plane and when we are in Miami',
            usersAssinged: [users[0], users[2], users[3]],
            createdBy: users[1],
            groupsAssigned: groups[1]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels while in Miami',
            usersAssinged: [users[0], users[2], users[3]],
            createdBy: users[1],
            groupsAssigned: groups[1]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel to the birthday party',
            usersAssinged: [users[0], users[1], users[3]],
            createdBy: users[2],
            groupsAssigned: groups[2]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the birthday party',
            usersAssinged: [users[0], users[1], users[3]],
            createdBy: users[2],
            groupsAssigned: groups[2]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the bithday party',
            usersAssinged: [users[0], users[1], users[3]],
            createdBy: users[2],
            groupsAssigned: groups[2]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels for the birthday party',
            usersAssinged: [users[0], users[1], users[3]],
            createdBy: users[2],
            groupsAssigned: groups[2]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel to the bar',
            usersAssinged: [users[0], users[1], users[2]],
            createdBy: users[3],
            groupsAssigned: groups[3]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks at the bar',
            usersAssinged: [users[0], users[1], users[2]],
            createdBy: users[3],
            groupsAssigned: groups[3]
          },
          {
            name: 'Food',
            description: 'We need to arrange food at the bar',
            usersAssinged: [users[0], users[1], users[2]],
            createdBy: users[3],
            groupsAssigned: groups[3]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels for after the party',
            usersAssinged: [users[0], users[1], users[2]],
            createdBy: users[3],
            groupsAssigned: groups[3]
          }
        ]),
        users,
        groups
      ])
    })
    .then(data => {
      const [ users, groups, categories ] = data
      // Now i have all three of the things we have created. And can make the tasks

      // no need for the promise array this time I should have everything I need

      //  Youre gonna have to check if the users/groups being assiigned to this task below pass your own validations.

      return Task.create([
        {
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: []
        }
      ])
    })
    .then(() => console.log('A bunch of stuff has been created'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
