<<<<<<< HEAD
# wdi-group-project
Group Project Repo
<<<<<<< HEAD
Matthew Whaley-Update
=======
Matthew Whaley-Update2
>>>>>>> update-readme
=======
_README_

#Organize - MERN Full Stack App
---

###Technical Requirements

* **Build a full-stack application*** by creating the backend and front-end.
* **Use an Express API** to serve the data from a Mongo database.
* **Consume the API with a separate front-end** built with React.
* **Be a complete product** with multiple relationships and CRUD functionality for at least a couple of models.
* Consume at least **one public API** to enhance the app.
* **Implement thoughtful user stories/wireframes**.
* **Have a visually impressive design**.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for at least one RESTful resource on the back-end.

---

###Wireframes

During the planning phase, the group came up with the following rough sketches of how the app would look:

(add here)

After implementation began, the wireframes were further developed to reflect the final product design, below:

(add here)

---

##App Overview

The Organize app is a organizational tool that allows users to create events and add contributors to these events. In short, the tool allows users to effectively manage tasks and assign responsibilities accordingly.

_Event Example_
Take for example, the event of 'Jess's Hen Do'. User: Stephano creates this event in Organize and adds in contributors: Mary, Matt and Jess to the event. He then creates main categories such as 'Travel', 'Transfers', 'Party Favors', etc. with additional tasks in each. For example: Travel holds the tasks of book flights, buy travel insurance, arrange airport drop off. Stephano can assign 'buy travel insurance' to Mary, book flights to Matt etc.

_Functionality_
Each user can also create a new event or group as well as new tasks, which appear in pop up windows.

When a task is completed, it will disappear from the list.

Once the entire event has ended, a user can delete the entire group, which removes the categories, tasks and associated comments.

---
##Frontend Overview

_Login & Register Modals_
The login modal uses a Bulma template with a basic login form to a modal, which pops up, allowing a user to login.

If they do not already have an account, they are directed to click on the link which directs them to the Register modal popup. These two are interconnected for an easier user experience.

---

##Backend Overview

## URL Structure

### organise.net
  _User Login/Register page for the application_

### organise.net/group
  _User dashboard showing all groups assigned to that user_

### organise.net/group/group:id
  _Group specific dashboard showing all categories and in the category widgets the category specific tasks_

### organise.net/group/group:id/tasks?category=category:id
  _Category specific dashboard showing all tasks in card form of a specific category_

### organise.net/group/group:id/tasks
  _Filtered tasks page(shows all as standard), used for muliple task views. Eg organise.net/group/group:id/tasks?priority=high&owner=123_
---

## Database - Organise

The database is broken down into the following Schemas:

### Users
* name: _string_
* profileName: - _string_
* email: _string_
* password: _string_
* createdDate: _timeStamp created by mongo_
* mongo_Id: _assigned by default_
* isActive: _boolean_
* isDormant: _boolean_

___

### Group
* name: _string_
* decription: _string_
* userAssigned: _array of mongo_Id's_
* userCreated: _mongo_Id_
* createdDate: _timeStamp created by Mongo_
* mongo_Id - _assigned by default_

___

### Category
* name: _string_
* decription: _string_
* userAssigned: _array of mongo_Id's_
* userCreated: _mongo_Id_
* groupAssinged: _mongo_Id_
* createdDate: _timeStamp created by mongo_
* mongo_Id - _assigned by default_

___

### Task
* name: _string_
* decription: _string_
* priority: _string of high, medium or  low_
* userAssigned: _array of mongo_Id's_
* userCreated: _mongo_Id_
* groupAssinged: _mongo_Id_
* isCurrent: _boolean_
* categorieId: _mongo_Id_
* createdDate: _timeStamp created by mongo_
* mongo_Id - _assigned by default_

  #### Comments
  * name: _string_
  * decription: _string_
  * userCreated: _mongo_Id_
  * createdDate: _timeStamp created by mongo_
  * mongo_Id - _assigned by default_
___
>>>>>>> 7b45cf7b2723bd2c0f1b50499d8c2a0c7673ec26
