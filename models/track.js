const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
  name: { type: String, required: true },
  artist: String,
  soundcloudId: { type: Number, required: true },
  Album: { type: String, required: true }
});
module.exports = mongoose.model('Track', trackSchema);
