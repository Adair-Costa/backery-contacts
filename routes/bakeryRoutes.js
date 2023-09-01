const express = require('express');
const bakeryController = require('../controllers/bakeryController');

const router = express.Router();

router.route('/').get(bakeryController.getFile).post(bakeryController.sendMail);

module.exports = router;
