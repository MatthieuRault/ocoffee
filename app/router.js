const express = require('express');
const mainController = require("./controllers/mainController");

const router = express.Router();


router.get('/', mainController.homePage);
router.get('/catalogue', mainController.catalogPage);
router.get('/about', mainController.aboutPage);
router.get('/article/:id', mainController.coffeeDetailsPage);

module.exports = router;