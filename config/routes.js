const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const trackController = require('../controllers/trackController');


router.route('/albums')
  .get(albumController.index)
  .post(albumController.create);
router.route('/albums/:id')
  .get(albumController.show)
  .put(albumController.update)
  .delete(albumController.delete);

router.route('/tracks')
  .get(trackController.index)
  .post(trackController.create);
router.route('/tracks/:id')
  .get(trackController.show)
  .put(trackController.update)
  .delete(trackController.delete);


module.exports = router;