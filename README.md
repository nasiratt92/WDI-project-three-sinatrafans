# WDI-project-three-sinatrafans
---

### Overview
A site for classical Jazz fans to celebrate the musical legend
___
### Technologies:

- HTML5
- SCSS
- JavaScript (ECMAScript 6)
- Node JS
- bcrypt
- express
- mongoose
- morgan
- mongoose
- Git
- GitHubs
- Heroku
- Trello
- Yarn
- Chai
- Mocha
- nyc

---
## Project brief

A blogging platform that meets the following minimum criteria:
#### The app must:
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
##### Server-side:

- Use Mongo, Node & Express to build a server-side API <kbd>✓</kbd>

- Your API must have at least 2 related models, one of which should be a user <kbd>✓</kbd>

- Your API should include all RESTFUL actions for at least one of those models <kbd>✓</kbd>

- Include authentication to restrict access to appropriate users <kbd>✓</kbd>

- Include at least one referenced or embedded sub-document. <kbd>✓</kbd>

- Include automated tests for at least one resource <kbd>✓</kbd>

##### Client-side
- Use Angular to build a front-end that consumes your API

- Use SCSS instead of CSS <kbd>✓</kbd>

- Use Webpack & Yarn to manage dependencies and compile source code <kbd>✓</kbd>

---

### Trello

 In addition to daily stand up, I was encouraged by class tutors to employ Trello as a tool for planning and for completion of this project. As it is a common in the industry to use similar project management tools. Typically a developer would pick a card from the trello board and work on it. Making development process transparent to other members of Dev team.

Working with a trello board template provided to us, A trello board was created making code planning and tracking the project status a lot easier. As a first I really enjoyed the clarity and simplicty that came with using a trello board.

Trello Screenshot:
![trello](https://i.imgur.com/0QsGeYD.jpg)

[Trello board - Link](https://trello.com/b/oDq6culm)
---


### Wireframes
Another first was to use a sketch up tool to create wireframes. I created wireframes on Prezzi, a tool usually used to deliver presentations, and intended to follow them.

![picture alt](../screenshots/Screen Shot 2018-08-17 at 10.36.02.png "Home Page wireframe")

### Challenges and Problems

- It was challenging at first to figure out the step-by-step process of building the app and inputting this into our Trello board so that we could divide the work and have a solid plan.

-  The meetup API was harder to implement than we thought it would be originally and took us longer than we expected to get it working and to find the correct url needed to get the response we wanted. Making a proxy request was challenging as it required a more intricate setup.

- The functionality behind a logged in user joining an existing meetup event from the API and displaying the single event on the show page was also more complicated than we originally expected. We had to save the information from the API we wished to display on the page.

---

### Wins

- Four types of API used - Frontend, Backend, Authorised web Api and no-API key required
- Secure route - User Login/Log Of & Sign-up
-Tests - Two Backend tests written (i.e. one non secured route and one non secured route), which ran were successfully.
- Stored Api key inside environment file
- Deployed to Heroku
- Not logged in users can hear fan Tracks
- Buy concert tickets feature based on links from Ticket master API.
- Employed Angular's in-built filterFilter function on the concert page to search the concerts.
-

---

### Future Features

Features I would have liked to include:

- As per the original wireframe. The landing page to display the last three track additions with the user name and city.

- Complete the custom directive for concerts show page to display the venue location on a map.

- Complete the concerts sort feature allowing users to sort concerts by location, date.

- Better user walkthrough experience.
