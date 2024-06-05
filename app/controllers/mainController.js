const dataMapper = require('../dataMapper');

const mainController = {
  homePage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés
      const coffees = await dataMapper.findCoffeesLimit();
      res.render("main/home", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render('500');
    }
  },
  catalogPage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés de façon aléatoire
      const randomCoffees = await dataMapper.findCoffeesLimitRandom();
      res.render("main/catalog", { randomCoffees });
    } catch (error) {
      console.error(error);
      res.status(500).render('500');
    }
  },
  coffeeDetailsPage: async (req, res) => {
    try {
      // Récupérer l'ID de l'article
      const articleId = parseInt(req.params.id);
      const coffee = await dataMapper.findDetailCoffee(articleId);      
      res.render("main/detail", { coffee });
    } catch (error) {
      console.error(error);
      res.status(500).render('500');
    }
  }
};

module.exports = mainController;
