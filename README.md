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

##Overview

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

_Database - Organize_

The database is broken down into the following Schemas:

### Users
* name: _string_
* profileName: - _string_
* email: _string_
* password: _string_
* groupsAssigned: _array of mongo_Id's_
* createdDate: _timeStamp created by mongo_
* mongo_Id: _assigned by default_
* isActive: _boolean_
* isDormant: _boolean_
___

### Group
* name: _string_
* description: _string_
* userAssigned: _array of mongo_Id's_
* userCreated: _mongo_Id_
* createdDate: _timeStamp created by Mongo_
* mongo_Id - _assigned by default_

#### Category
  * name: _string_
  * description: _string_
  * userAssigned: _array of mongo_Id's_
  * userCreated: _mongo_Id_
  * groupAssigned: _mongo_Id_
  * createdDate: _timeStamp created by mongo_
  * mongo_Id - _assigned by default_

#### Task
  * name: _string_
  * description: _string_
  * priority: _string of high, medium or low_
  * userAssigned: _array of mongo_Id's_
  * userCreated: _mongo_Id_
  * groupAssigned: _mongo_Id_
  * isCurrent: _boolean_
  * categoryId: _mongo_Id_
  * createdDate: _timeStamp created by mongo_
  * mongo_Id - _assigned by default_

##### Comments
    * name: _string_
    * description: _string_
    * userCreated: _mongo_Id_
    * createdDate: _timeStamp created by mongo_
    * mongo_Id - _assigned by default_

---
