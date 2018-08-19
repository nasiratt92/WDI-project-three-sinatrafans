const Track = require('../models/track');

function tracksIndex(req, res) {
  console.log('made it to the controller');
  Track
    .find()
    .exec()
    .then(tracks => res.status(200).json(tracks))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}
function trackCreate(req,res) {
  Track
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(() => res.status(500).json({message: 'Something went wrong'}));
}
function trackShow(req, res) {
  console.log('made it to the controller');
  Track
    .findById(req.params.id)
    .then(track => res.json(track))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function trackUpdate(req, res) {
  Track
    .findById(req.params.id)
    .then(track => track.set(req.body))
    .then(track => track.save())
    .then(track => res.json(track))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function trackDelete(req, res) {
  Track
    .findById(req.params.id)
    .then(track =>  track.remove())
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

module.exports = {
  index: tracksIndex,
  create: trackCreate,
  show: trackShow,
  update: trackUpdate,
  delete: trackDelete
};
