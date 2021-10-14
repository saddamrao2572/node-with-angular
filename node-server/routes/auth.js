var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth');
// Require controller modules.
var locations_controller = require('../controllers/locationsController');
var menu_controller = require('../controllers/menuController');
var tickets_controller = require('../controllers/ticketsController');
var categories_controller = require('../controllers/categoriesController');
var auth_controller = require('../controllers/authController');

//var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.

router.get('/',checkAuth, auth_controller.auth);
router.get('/:id',checkAuth, auth_controller.auth);


// GET request to delete Book.
router.get('/locations/:id',checkAuth, auth_controller.get_all_locations);
router.get('/locations/details/:locationID/:id',checkAuth, auth_controller.get_location_detail);
router.get('/locations/all/:id',checkAuth, auth_controller.get_all_locations_all);
router.get('/menu/details/:locationID/:id',checkAuth, auth_controller.get_menu_detail);
router.get('/menu/:locationID/:id',checkAuth, auth_controller.get_all_menu);
router.get('/tickets/:locationID/:id',checkAuth, auth_controller.get_all_tickets);
router.get('/categories/:locationID/:id', checkAuth,auth_controller.get_all_categories);
router.get('/items/:locationID/:id', checkAuth,auth_controller.get_all_items);
router.get('/modifiers/:locationID/:id', checkAuth,auth_controller.get_all_modifiers);


module.exports = router;