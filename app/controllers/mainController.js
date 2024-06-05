const dataMapper = require('../dataMapper');

const mainController = {
  homePage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD
      const coffees = await dataMapper.findAllCoffees();
      res.render("main/home", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render('500');
    }
  },

  catalogPage(req, res) {
    res.render("main/catalog");
  },

  coffeeDetailsPage(req, res) {
    res.render("main/detail");
  }
};

module.exports = mainController;
