// 1. require le module
const pg = require("pg");

// 2. Créer un client
const client = new pg.Client({
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false,
    sslmode: "require",
  },
});

// 3. Connecter le client
client.connect();

module.exports = client;
