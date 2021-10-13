var express = require('express');
var router = express.Router();
// Require controller modules.
var locations_controller = require('../controllers/locationsController');

//var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', locations_controller.index);


// GET request to delete Book.
router.get('/locations/:id', locations_controller.get_all_locations);


module.exports = router;