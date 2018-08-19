const Album = require('../models/album');

function albumsIndex(req, res) {
  console.log('made it to the controller');
  Album
    .find()
    .exec()
    .then(albums => res.status(200).json(albums))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}
function albumCreate(req,res) {
  Album
    .create(req.body)
    .then(album => res.status(201).json(album))
    .catch(() => res.status(500).json({message: 'Something went wrong'}));
}
function albumShow(req, res) {
  console.log('made it to the controller');
  Album
    .findById(req.params.id)
    .then(album => res.json(album))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function albumUpdate(req, res) {
  Album
    .findById(req.params.id)
    .then(album => album.set(req.body))
    .then(album => album.save())
    .then(album => res.json(album))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function albumDelete(req, res) {
  Album
    .findById(req.params.id)
    .then(album =>  album.remove())
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

module.exports = {
  index: albumsIndex,
  create: albumCreate,
  show: albumShow,
  update: albumUpdate,
  delete: albumDelete
};
