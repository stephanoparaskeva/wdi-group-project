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
4. Clicking on the 'Go to all Tasks' button will take the user into the group where they can make Tasks to-do for the users in the Group and apply any Categories or Priorities to these Tasks. The user can also filter through the Tasks of the Group.
 ![](https://i.imgur.com/pQrmVJk.png)
5. Tasks can be edited and deleted. When a task is agreed to be complete, it is logged as 'Done'.
 ![](https://media.giphy.com/media/L3QlXpiK3UGt1k5b0C/giphy.gif)
