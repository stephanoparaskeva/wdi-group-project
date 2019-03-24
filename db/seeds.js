const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Group = require('../models/group')
const Category = require('../models/category')
const Task = require('..models/task')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

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
    },
    {
      name: 'test',
      username: 'test',
      email: 'test@email.com',
      password: 'password',
      isCurrentlyActive: true,
      isDormant: false
    }
  ])
    .then(users => {

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
          },
          {
            name: 'test',
            description: 'test test',
            createdBy: null,
            usersAssinged: []
          }
        ]),
        users
      ])
    })
    .then(data => {
      const [ users, groups] = data

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
          },
          {
            name: 'test',
            description: 'test',
            usersAssinged: [],
            createdBy: null,
            groupsAssigned: groups[4]
          }
        ]),
        users,
        groups
      ])
    })
    .then(data => {
      const [ users, groups, categories ] = data

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
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        },{
          name: 'Book flights',
          description: 'Books flights from London to Ibiza',
          priority: 'High',
          usersAssinged: users[0],
          createdBy: users[0],
          groupAssigned: groups[0],
          isCurrent: true,
          category: categories[0],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[0]
          }]
        }
      ])
    })
    .then(() => console.log('A bunch of stuff has been created'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
