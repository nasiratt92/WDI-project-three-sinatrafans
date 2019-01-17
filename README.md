# Sinatra fans

## Project brief

#### The app must:

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
### Overview
A site for classical Jazz fans to celebrate the musical legend Frank Sinatra.

[Sinatra-fans  - Link](https://sinatra-fans.herokuapp.com/)

![picture alt](http://sinatra.com/sites/default/files/sinatraweb.jpg "Home Page wireframe")

Fan albums - as a FS fan, you can upload a track to Soundcloud sung by you or by another artist to celebrate but it must be a track from FS Albums. Hence why to add a track you need log in and add it under a fan album.

 The added tracks are available for all to listen under the tracks tab.

The concerts tab displays all the FS tribute concerts taking place around the world on Ticket master.
___
### Technologies:

- HTML5
- SCSS
- JavaScript (ECMAScript 6)
- Node JS
- angular: v1.7.3
- bulma
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

### Trello

 In addition to daily stand up, I was encouraged by class tutors to employ Trello as a tool for planning and for completion of this project. As typically a developer would pick a card from the trello board and work on it, making development process transparent to other members of Dev team.

Working with a trello board template provided to us, a trello board was created for this project, making code planning and tracking the project status a lot easier. I really enjoyed the clarity and simplicity that came with using a trello board.

Trello Screenshot:

![trello](https://i.imgur.com/0QsGeYD.jpg)

[Trello board - Link](https://trello.com/b/lrZeBJWP)
---


### Wireframes
Another first was to use a sketch up tool to create wireframes. I created wireframes on Prezi (a tool usually used to deliver presentations) due to it's familiarity.

##### Wireframe Screenshots:

![picture alt](https://i.imgur.com/Gx2ZCme.png "Home Page wireframe")

![picture alt](https://i.imgur.com/hsG8NgA.png "Home Page wireframe")

---

### Challenges and Problems

This project's main challenge was time management, the project required time allocation balancing between; creating and updating Trello, wireframing, MVP, coding Backend features, coding Frontend features,  styling and time spent researching coding errors/ bug fixing.

-  The Itunes API caused an issue, as it was discovered that Itunes Api did not allow request through front end and therefore the Api call had to bee made from the backend in order to render albums from Itunes web Api.


---

### Wins
As I progressed through the project, I found that I could probably do a Fortnite style dance for each of these achievements:

- Four types of API used - Frontend, Backend, Authorised web Api and no API-key required web API

- Secure routes - User Login/Log-off & Sign-up

- Tests - Two Backend tests written (i.e. one non secured route and one non secured route), which ran successfully:

```js
it('should return a 401 without a token', done =>{
  api.delete(`/api/albums/${albumId}`)
    .end((err, res) => {
      expect(res.status).to.eq(401);
      done();
    });
});


it('should delete the Album', done => {
  api.delete(`/api/albums/${albumId}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => Album.find())
    .then(albums => {
      expect(albums.length).to.eq(0);
      done();
    });
});
```
[Test file - Link](./test/spec_helper.js)

- Hid API key inside environment file

- Deployed to Heroku

- Not logged in users can hear fan Tracks

- Buy concert tickets feature based on links from Ticket master API.

- Employed Angular's in-built filterFilter function on the concert page to search the concerts.

---

### Future Features


- Complete the site layout as per the wireframes and the landing page to display the last three track additions with the user name and city.

- Complete the custom directive for concerts show page to display the venue location on a map.

- Complete the concerts sort feature allowing users to sort concerts by location and date.

- Better user walkthrough experience.
