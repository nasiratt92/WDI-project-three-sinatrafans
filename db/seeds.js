const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const User = require('../models/user');
const Album = require('../models/album');
const Track = require('../models/track');


mongoose.connect(dbURI);
Album.collection.drop();
Track.collection.drop();
User.collection.drop();

const userData = [{
  userName: 'alpha',
  email: 'a@a.com',
  password: 'pass'

},{
  userName: 'beta',
  email: 'b@b.com',
  password: 'pass'
}
];
const albumData = [{
  name: 'In the Wee Small Hours' ,
  releaseYear: 1955,
  numberofTracks: 16,
  genres: ['Vocal jazz','Traditional pop music'],
  albumCoverUrl: 'https://pictures.abebooks.com/CATSCURIOSITIES/md/md22397315448.jpg',
  tracks: ['YES', 'Fade Away', 'Shot by My Own Gun', 'World Can Wait'],
  availibleTracks: ['https://soundcloud.com/frank-sinatra/come-fly-with-me-1']
},
{
  name: 'Come Fly with Me' ,
  releaseYear: 1958,
  numberofTracks: 12,
  genres: ['Vocal jazz','Traditional pop music'],
  albumCoverUrl: 'https://images.rapgenius.com/d7973fb995bcb7b710aee5f859e34cfb.400x392x1.jpg',
  tracks: ['YES222', 'Fade Away', 'Shot by My Own Gun', 'World Can Wait'],
  availibleTracks: ['https://soundcloud.com/frank-sinatra/come-fly-with-me-1']
},
{
  name: 'Frank Sinatra Sings for Only the Lonely' ,
  releaseYear: 1958,
  numberofTracks: 12,
  genres: ['Vocal jazz','Traditional pop music'],
  albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Sinatraonlythelonely.jpg',
  tracks: ['YES333', 'Fade Away', 'Shot by My Own Gun', 'World Can Wait'],
  availibleTracks: ['https://soundcloud.com/frank-sinatra/come-fly-with-me-1']
}];
const trackData = [{
  name: 'Come Fly With Me',
  artist: 'Frank Sinatra',
  soundcloudId: 259109100,
  soundcloudEmbedUrl: 'https://soundcloud.com/frank-sinatra/come-fly-with-me-1'
},{
  name: 'Ain/t That A Kick In The Head',
  artist: 'KevinFitzsimmons',
  soundcloudId: 105889556,
  soundcloudEmbedUrl: 'https://soundcloud.com/deanmartintribute/dean-martin-tribute-aint-that'
}];

User
  .create(userData)
  .then((users) => {
    console.log(`Created ${users.length} users`);
    return Album.create(albumData);
  })
  .then(albums => {
    console.log(`Created ${albums.length} albums`);
    // Add an album to the first track!
    trackData[0].album = albums[1]._id;
    // Add an album to the second track!
    trackData[1].album = albums[2]._id;
    return Track.create(trackData);
  })
  .then(tracks => console.log(`Created ${tracks.length} tracks`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
