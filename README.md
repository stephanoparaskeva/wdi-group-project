# General Assembly WDI Project 3
## Organise
[Deployed project](https://organise-ga.herokuapp.com)

![](https://i.imgur.com/jQl9Jt7.jpg?1)
___
### Overview:
A task management app similar to Trello that allows the user to create groups based on events, and tasks to-do. The user can make friends and allocate friends to the groups they own to create private parties.
___

### Timeframe:
    9 days
### The Brief:

* **Build a full-stack application** by creating the backend and front-end.
* **Use an Express API** to serve the data from a Mongo database.
* **Consume the API with a separate front-end** built with React.
* **Be a complete product** with multiple relationships and CRUD functionality for at least a couple of models.
* **Implement thoughtful user stories/wireframes**.
* **Have a visually impressive design**.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for at least one RESTful resource on the back-end.

### Technologies:

* React
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express
* Mocha
* Chai
* HTML5
* CSS
* SCSS
* Bulma

### Approach:
We decided the best approach to be one that takes inspiration from platforms like Trello. Where all of the main app functionality is done and rendered on a single page. Because of this we aimed for the user to be able to post, edit and delete their Tasks, Categories and Groups all in the same place. Our biggest goal for the app was overall polish, we decided that we wanted to aim for a smooth and friendly user experience. A single page application helped bring out this effect.

### Walkthrough:
1. Before any functionality is available, the user must log in. This is because the entire user experience depends on a persistant account of that user's Groups.
 ![](https://i.imgur.com/rV6asRE.png?1)
2. The user can now access their personal profile, which shows their details and allows the user to make friend requests or add any other user that has requested to be their friend. Only the creator of a Group and those assigned to a Group can see that group, therefore any Groups that are created by someone else but assigned to you, will pop up and you will be able to work with another user, together within the Group.
 ![](https://media.giphy.com/media/IbsQ4WGhzLAcYSvDWa/giphy.gif)
3. If the user navigates to the Groups section, the user can create Groups for events, create Categories for the tasks of each Group and assign any friends they have made.
 ![](https://i.imgur.com/HAWfPLn.png?1)
4. Clicking on the 'Go to all Tasks' button will take the user to that Group where they can make Tasks to-do for the users in the Group and apply any Categories or Priorities to these Tasks. The user can also filter through the Tasks of the Group.
 ![](https://i.imgur.com/pQrmVJk.png)
5. Tasks can be edited and deleted. When a task is agreed to be complete, it is logged as 'Done'.
 ![](https://media.giphy.com/media/L3QlXpiK3UGt1k5b0C/giphy.gif)


### Profile:
The user profile provides all of the information the user has, for them to view. It allows the user to manage their friend requests and add new users. The code below shows the back-end controllers for adding and requesting friends. This functionality was possible with a Mongoose plugin called 'Mongoose Friends':
```javascript
function usersPending(req, res, next) {
  req.body.user = req.currentUser
  User
    .getPendingFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersAccepted(req, res, next) {
  req.body.user = req.currentUser
  User
    .getAcceptedFriends(req.body.user)
    .then(users => res.status(200).json(users))
    .catch(next)
}

function usersRequest(req, res, next) {
  req.body.user = req.currentUser
  User
    .requestFriend(req.body.user, req.params.userId)
    .then(() => res.sendStatus(200))
    .catch(next)
}

module.exports = {
  request: usersRequest,
  allAccepted: usersAccepted,
  allPending: usersPending
}
```

### Styling:
As we aspired for polish in this project, we chose to go with a ready-built CSS framework that was clean and flexible out-the-box. We chose to use Bulma, this is because Bulma provided a great foundational framework for us to build upon. It offered a tiled website display that we chose to utilise due to its ease of use and accessibility. The site color scheme was inspired by Trello. We wanted to add some of our own creativity and thus chose to go with a very 'classroom register' like feel. Where the layout is simple to navigate, colors are friendly to look at and functionality works smoothly.

### Process:
This was a group based project where I worked in a team with 3 other developers: [Jessica Barnes](https://github.com/jessicamarybarnes), [Mary Cherasa](https://github.com/MaryCerasa) and [Matt Whaley](https://github.com/mjwhaley). We worked together using Version-Control via Git on GitHub where Mary was the Git master. All of us would communicate on what we were doing at each point in time. We'd handle any Git conflicts together and discuss what we wanted to keep and what we didn't. Features were created on separate Git branches before being merged into the development branch.

**Division of work**:

We decided to divide our tasks evenly in order to build the application from all angles. This was to increase efficiency and meant that no one was left without work to do. I focused on the back-end models, testing using Mocha & Chai and the REST routes for the Categories resource. The second developer focused on the REST routes for Tasks and Groups. The third focused on managing the planning, overseeing the work done and the seeds file. And the last developer focused on styling and wireframes.

**Methodology**:
1. First I drew up the back-end models on a whiteboard while discussing with the team. Each gave feedback and helped structure the relationships
 
 ![](https://i.imgur.com/TthwseX.jpg)

2. Next we used post-it-notes to plan the structure of the site in order to gain a holistic overview of how each component would fit together to better understand the project and what was required.
 
 ![](https://i.imgur.com/kcoX6tR.jpg)

3. Afterwards we created wireframes of how we wanted the site layout to work. We discussed for some time and arrived at wireframes focused heavily on bringing together much of the functionality into minimal pages.
 
 ![](https://i.imgur.com/ANk1xTC.png)
 
 ![](https://i.imgur.com/vWOph94.png)

4. In order to keep track of the tasks we each had, we used Trello as a pipeline for our ideas and those tasks. Using Trello at each point in the development of our app greatly helped us understand Trello itself. As our app was inspired by Trello and had similar functionality, this meant that using Trello helped both for managing the project and also understanding how to make the project work better.
 
 ![](https://i.imgur.com/jQHcfS8.jpg)

5. Throughout our project, we utilised the Slack messaging platform to send eachother snippets of code we were working on in order to overcome problems and also discuss Version-Control to ensure the project ran smoothly with minimal conflicts.
 
 ![](https://i.imgur.com/ZZVm8SS.png?1)
### Bugs
*Below is a list of some of the known issues*:

---

**Problem**: There is a list on the user profile of all users in order to add any user as a friend. There however is no filter or search bar and thus the page will become very hard to navigate as the number of users on the site increase.

**Solution**: As a solution, a search bar instead could be added in order for the user to search for the people they'd like to become friends with. This would mean the page will not display every user and thus be far more manageable.

---

**Problem**: After assigning users to Groups, there is no way to view which users are assigned to which Groups and thus no way to remove said users. This means that if a user makes a mistake or forgets the people assigned to a Group, they will have to delete the Group and restart.

**Solution**: Going forward, I would have provided functionality to remove users from Groups and functionality to view users assigned to Groups, the latter can be achieved by mapping the array of users assigned to a Group that is contained on the Group model:
```javascript
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
```

---
