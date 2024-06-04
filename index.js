const express = require('express');
const app = express();
require('dotenv').config();

// Configuration du moteur de rendu
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Configurer des routes statiques
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main/home');
});

app.get('/catalogue', (req, res) => {
  res.render('main/catalog');
});

app.use((req, res) => {
  res.status(404).render('error/404');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Project oCoffee listening at http://localhost:${port}`);
});