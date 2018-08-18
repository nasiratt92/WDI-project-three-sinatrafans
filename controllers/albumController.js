const Album = require('../models/album');

function albumsIndex(req, res, next) {
  console.log('made it to the controller');
  Album
    .find()
    // .exec()
    .then(albums => res.status(200).json(albums))
    .catch(next);
}

module.exports = {
  index: albumsIndex
};
