var express = require('express');
var router = express.Router();

var locations_controller = require('../controllers/locationsController');
router.get('/', locations_controller.index);

router.get('/locations/:id', locations_controller.get_all_locations);


module.exports = router;