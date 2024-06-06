const dataMapper = require('../dataMapper');

const basketController = {
  basketPage: async (req, res) => {
    // Stock la valeur basket
    const coffeeIds = req.session.basket;
    // On récupére les cafés par leurs id
    const coffees = await dataMapper.findCoffeesById(coffeeIds);
    res.render('main/basket', { coffees });
  }
}

module.exports = basketController;