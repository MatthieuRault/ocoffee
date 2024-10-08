const express = require('express');
const mainController = require("./controllers/mainController");
const basketController = require('./controllers/basketController');

const router = express.Router();


router.get('/', mainController.homePage);

router.get('/catalogue', mainController.catalogPage);
router.get('/catalogue/all-coffees', mainController.listCoffees);

router.get('/about', mainController.aboutPage);

router.get('/article/:id', mainController.coffeeDetailsPage);

router.get('/boutique', basketController.basketPage);
router.get('/boutique/add/:id', basketController.addCoffeeToBasket);
router.get('/boutique/delete/:id', basketController.removeCoffeeToBasket);

module.exports = router;