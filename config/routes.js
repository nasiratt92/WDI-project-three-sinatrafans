const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');


router.route('/albums')

  .get(albumController.index);
// .post(albumController.create);




module.exports = router;
