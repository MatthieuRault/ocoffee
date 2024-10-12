const dataMapper = require("../dataMapper");

const mainController = {
  homePage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés de façon aléatoire
      const randomCoffees = await dataMapper.findCoffeesLimitRandom();
      res.render("main/home", { randomCoffees });
    } catch (error) {
      console.error(error);
      res.status(500).render("error/500");
    }
  },
  catalogPage: async (req, res) => {
    try {
      // Récupérer tout les cafés de la BDD avec une limite de 3 cafés
      const coffees = await dataMapper.findCoffeesLimit();
      res.render("main/catalog", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render("error/500");
    }
  },
  coffeeDetailsPage: async (req, res) => {
    try {
      // Récupérer l'ID de l'article
      const articleId = parseInt(req.params.id);
      // Si l'ID n'est pas un nombre, on renvoie une erreur 400
      if (isNaN(articleId)) {
        return res.status(400).json({ message: "L'ID doit être un nombre" });
      }
      const coffee = await dataMapper.findDetailCoffee(articleId);
      // Si le café n'existe pas, on renvoie une erreur 404
      if (!coffee) {
        return res.status(404).render("error/404");
      }
      res.render("main/detail", { coffee });
    } catch (error) {
      console.error(error);
      res.status(500).render("error/500");
    }
  },
  aboutPage: (req, res) => {
    try {
      res.render("main/about");
    } catch (error) {
      console.error(500).render("error/500");
    }
  },
  listCoffees: async (req, res) => {
    try {
      const coffees = await dataMapper.findAllCoffees();
      // Si aucun café n'est trouvé, on renvoie une erreur 404
      if (!coffees) {
        return res.status(404).render("error/404");
      }
      res.render("main/catalog", { coffees });
    } catch (error) {
      console.error(error);
      res.status(500).render("error/500");
    }
  },
};

module.exports = mainController;
