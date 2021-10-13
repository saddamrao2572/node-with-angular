var express = require('express');
var router = express.Router();
// Require controller modules.
var locations_controller = require('../controllers/locationsController');
var auth_controller = require('../controllers/authController');

//var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', auth_controller.index);
router.get('/:id', auth_controller.auth);


// GET request to delete Book.
router.get('/locations/:id', locations_controller.get_all_locations);


module.exports = router;