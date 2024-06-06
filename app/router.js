const express = require('express');
const mainController = require("./controllers/mainController");
const basketController = require('./controllers/basketController');

const router = express.Router();


router.get('/', mainController.homePage);
router.get('/catalogue', mainController.catalogPage);
router.get('/about', mainController.aboutPage);
router.get('/article/:id', mainController.coffeeDetailsPage);

router.get('/boutique', basketController.basketPage);

module.exports = router;