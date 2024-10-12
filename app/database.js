// 1. require le module
const { Client } = require("pg");

// 2. Créer un client
const client = new Client({
  connectionString: process.env.PG_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// 3. Connecter le client
client.connect();

module.exports = client;
