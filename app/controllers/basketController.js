const dataMapper = require('../dataMapper');

const basketController = {
  basketPage: (req, res) => {
    res.render('main/basket')
  }
}

module.exports = basketController;