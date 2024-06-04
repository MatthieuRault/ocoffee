const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/home');
});

router.get('/catalogue', (req, res) => {
  res.render('main/catalog');
});

router.get('/article', (req, res) => {
  res.render('main/detail');
});

module.exports = router;

