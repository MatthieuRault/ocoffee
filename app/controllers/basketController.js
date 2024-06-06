const dataMapper = require('../dataMapper');

const basketController = {
  basketPage: async (req, res) => {
    // Stock la valeur basket
    const coffeeIds = req.session.basket;
    // On récupére les cafés par leurs id
    const coffees = await dataMapper.findCoffeesById(coffeeIds);
    res.render('main/basket', { coffees });
  },
  addCoffeeToBasket: (req, res) => {
    const basketId = parseInt(req.params.id);
    req.session.basket.push(basketId);
    res.redirect('/boutique');
  },
  removeCoffeeToBasket: (req, res) => {
    const coffeeIdToRemove = parseInt(req.params.id);
    req.session.basket = req.session.basket.filter(coffeeId => coffeeId !== coffeeIdToRemove);
    res.redirect('/boutique');
  }
}

module.exports = basketController;