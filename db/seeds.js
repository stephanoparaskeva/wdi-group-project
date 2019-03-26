const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const Group = require('../models/group')
const Category = require('../models/category')
const Task = require('../models/task')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          name: 'Matthew Whaley',
          username: 'matthew',
          email: 'matthew@email.com',
          password: 'Password1*',
          passwordConfirmation: 'Password1*',
          isCurrentlyActive: true,
          isDormant: false
        },
        {
          name: 'Jess Barnes',
          username: 'jess',
          email: 'jess@email.com',
          password: 'Password1*',
          passwordConfirmation: 'Password1*',
          isCurrentlyActive: true,
          isDormant: false
        },
        {
          name: 'Mary Caresa',
          username: 'mary',
          email: 'mary@email.com',
          password: 'Password1*',
          passwordConfirmation: 'Password1*',
          isCurrentlyActive: true,
          isDormant: false
        },
        {
          name: 'Stephano Paraskeva',
          username: 'stephano',
          email: 'stephano@email.com',
          password: 'Password1*',
          passwordConfirmation: 'Password1*',
          isCurrentlyActive: true,
          isDormant: false
        },
        {
          name: 'test',
          username: 'test',
          email: 'test@email.com',
          password: 'Password1*',
          passwordConfirmation: 'Password1*',
          isCurrentlyActive: true,
          isDormant: false
        }
      ])
    })
    .then(users => {
      return Promise.all([
        Group.create([
          {
            name: 'Jess Hen',
            description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza',
            createdBy: users[0],
            usersAssigned: [users[1], users[2], users[3]]
          },
          {
            name: 'Mary Hen',
            description: 'Yo girls. This is a group I set up to help organise Marys hen party in Miami',
            createdBy: users[1],
            usersAssigned: [users[0], users[2], users[3]]
          },
          {
            name: 'Matt Birthday',
            description: 'Boys, This is a group I set up to help organise Matts birthday party',
            createdBy: users[2],
            usersAssigned: [users[0], users[1], users[3]]
          },
          {
            name: 'Stephano',
            description: 'Lads, This is a group I set up to help organise Stephano\'s leaving party before he moves to mainland Greece',
            createdBy: users[3],
            usersAssigned: [users[0], users[1], users[2]]
          },
          {
            name: 'test',
            description: 'test test',
            createdBy: null,
            usersAssigned: []
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
            usersAssigned: [users[1], users[2], users[3]],
            createdBy: users[0],
            group: groups[0]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the plane and when we are in Ibiza',
            usersAssigned: [users[1], users[2], users[3]],
            createdBy: users[0],
            group: groups[0]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the plane and when we are in Ibiza',
            usersAssigned: [users[1], users[2], users[3]],
            createdBy: users[0],
            group: groups[0]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels while in Ibiza',
            usersAssigned: [users[1], users[2], users[3]],
            createdBy: users[0],
            group: groups[0]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel from London to Miami',
            usersAssigned: [users[0], users[2], users[3]],
            createdBy: users[1],
            group: groups[1]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the plane and when we are in Miami',
            usersAssigned: [users[0], users[2], users[3]],
            createdBy: users[1],
            group: groups[1]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the plane and when we are in Miami',
            usersAssigned: [users[0], users[2], users[3]],
            createdBy: users[1],
            group: groups[1]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels while in Miami',
            usersAssigned: [users[0], users[2], users[3]],
            createdBy: users[1],
            group: groups[1]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel to the birthday party',
            usersAssigned: [users[0], users[1], users[3]],
            createdBy: users[2],
            group: groups[2]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks for the birthday party',
            usersAssigned: [users[0], users[1], users[3]],
            createdBy: users[2],
            group: groups[2]
          },
          {
            name: 'Food',
            description: 'We need to arrange food for the bithday party',
            usersAssigned: [users[0], users[1], users[3]],
            createdBy: users[2],
            group: groups[2]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels for the birthday party',
            usersAssigned: [users[0], users[1], users[3]],
            createdBy: users[2],
            group: groups[2]
          },
          {
            name: 'Travel',
            description: 'We need to arrange travel to the bar',
            usersAssigned: [users[0], users[1], users[2]],
            createdBy: users[3],
            group: groups[3]
          },
          {
            name: 'Drinks',
            description: 'We need to arrange drinks at the bar',
            usersAssigned: [users[0], users[1], users[2]],
            createdBy: users[3],
            group: groups[3]
          },
          {
            name: 'Food',
            description: 'We need to arrange food at the bar',
            usersAssigned: [users[0], users[1], users[2]],
            createdBy: users[3],
            group: groups[3]
          },
          {
            name: 'Hotel',
            description: 'We need to arrange hotels for after the party',
            usersAssigned: [users[0], users[1], users[2]],
            createdBy: users[3],
            group: groups[3]
          },
          {
            name: 'test',
            description: 'test',
            usersAssigned: [],
            createdBy: null,
            group: groups[4]
          }
        ]),
        users,
        groups
      ])
    })
    .then(data => {
      const [ categories, groups, users ] = data
      const random = Math.floor(Math.random()*3)
      return Task.create([
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'High',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Medium',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        },
        {
          name: 'Name that super task',
          description: 'Decription of a great thing that needs doing',
          priority: 'Low',
          usersAssigned: users[random],
          createdBy: users[random],
          group: groups[random],
          isCurrent: true,
          category: categories[random],
          comments: [{
            name: 'Comment Name',
            description: 'Some comment description',
            createdBy: users[random]
          }]
        }
      ])
    })
    .then(() => console.log('A bunch of stuff has been created'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
