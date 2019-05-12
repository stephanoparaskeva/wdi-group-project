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
2. Once a user has logged in, they are met with the Groups screen. Here a user can create Groups for events, Categories for the tasks of each Group and assign any friends they have made.
 ![](https://i.imgur.com/HAWfPLn.png?1)
