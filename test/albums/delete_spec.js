/* global api, expect, describe, it, beforeEach */
const Album = require('../../models/album');

let albumId;

const albumData = {

  name: 'Kick In DA DA DA Head',
  artist: 'KevinFitzsimmons',
  soundcloudId: 105889556,
  soundcloudEmbedUrl: 'https://soundcloud.com/deanmartintribute/dean-martin-tribute-aint-that'

};

describe('DELETE /albums/:id', () =>{
  beforeEach(done => {
    Album.remove({})
      .then(() => Album.create(albumData))
      .then(album => {
        albumId = album.id;
        done();
      });
  });
  it('should delete the Album', done => {
    api.delete(`/api/albums/${albumId}`)
      .then(() => Album.find())
      .then(albums => {
        expect(albums.length).to.eq(0);
        done();
      });
  });


});
