const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
  name: { type: String, required: true },
  releaseYear: Number,
  numberofTracks: Number,
  genres: [{type: String}],
  albumCoverUrl: String,
  tracks: [{type: String}],
  availibleTracks: String
});
module.exports = mongoose.model('Album', albumSchema);
