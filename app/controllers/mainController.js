const mainController = {
  homePage(req, res) {
    res.render("main/home");
  },

  catalogPage(req, res) {
    res.render("main/catalog");
  },

  coffeeDetailsPage(req, res) {
    res.render("main/detail");
  }
};

module.exports = mainController;
