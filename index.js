require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./app/router');
const expressSession = require('express-session');


// Configuration du moteur de rendu
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Configurer des routes statiques
app.use(express.static('public'));

app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24H cookies
}));

app.use((req, res, next) => {
  req.session.basket = req.session.basket || [];
  next();
});

app.use(router);

app.use((req, res) => {
  res.status(404).render('error/404');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Project oCoffee listening at http://localhost:${port}`);
});