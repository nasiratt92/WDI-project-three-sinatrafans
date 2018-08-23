const express = require('express');
const router = express.Router();
const secureRoute = require('../lib/secureRoute');
const albumController = require('../controllers/albumController');
const trackController = require('../controllers/trackController');
const authController = require('../controllers/authController');
const concertController = require('../controllers/concertController');

router.route('/albums')
  .get(albumController.index)
  .post(albumController.create);
router.route('/albums/:id')
  .get(albumController.show)
  .put(albumController.update)
  .delete(secureRoute, albumController.delete);

router.route('/albums/:id/tracks')
  .get(trackController.findByAlbum);

router.route('/tracks')
  .get(trackController.index)
  .post(trackController.create);
router.route('/tracks/:id')
  .get(trackController.show)
  .put(trackController.update)
  .delete(trackController.delete);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

router.route('/concerts')
  .get(concertController.list);

module.exports = router;
