const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
  name: { type: String, required: true },
  artist: String,
  soundcloudId: { type: Number, required: true },
  album: { type: mongoose.Schema.ObjectId, ref: 'Album' },
  soundcloudEmbedUrl: String
});
module.exports = mongoose.model('Track', trackSchema);
