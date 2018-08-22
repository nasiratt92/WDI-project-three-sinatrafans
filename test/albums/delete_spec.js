/* global api, expect, describe, it, beforeEach */
const Album = require('../../models/album');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token;
let albumId;

const userData = {
  userName: 'alphi',
  email: 'a@b.com',
  password: 'pass',
  passwordConfirmation: 'pass'

};

const albumData = {

  name: 'In the Weed Small Hours' ,
  releaseYear: 1005,
  numberofTracks: 6,
  genres: ['Vocalsssssss jazz','Traditional pop music']
};

describe('DELETE /albums/:id', () =>{

  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, {expiresIn: '1hr'});
        return Album.remove({});
      })
      .then(() => Album.create(albumData))
      .then(album => {
        albumId = album.id;
        done();
      });
  });

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


});
