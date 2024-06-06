const dataMapper = require('../dataMapper');

const mainController = {
  homePage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés de façon aléatoire
      const randomCoffees = await dataMapper.findCoffeesLimitRandom();
      res.render("main/home", { randomCoffees });      
    } catch (error) {
      console.error(error);
      res.status(500).render('error/500');
    }
  },
  catalogPage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés
      const coffees = await dataMapper.findCoffeesLimit();
      res.render("main/catalog", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render('error/500');
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
      res.status(500).render('error/500');
    }
  },
  aboutPage: (req, res) => {
    try {
      res.render('main/about');
    } catch (error) {
      console.error(500).render('error/500');
    }
  },
  listCoffees: async (req, res) => {
    try {
      const coffees = await dataMapper.findAllCoffees();      
      res.render('main/catalog', { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render('error/500');
    }
  }
};

module.exports = mainController;
