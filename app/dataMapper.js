const client = require('./database.js');

const dataMapper = {
  findCoffeesLimit: async () => {
    const result = await client.query(`SELECT * FROM "coffee" LIMIT 3`);
    const coffees = result.rows;
    return coffees;
  },
  findCoffeesLimitRandom: async () => {
    const result = await client.query(`SELECT * FROM "coffee" ORDER BY RANDOM() LIMIT 3`);
    const coffees = result.rows;
    return coffees
  },
  findAllCoffees: async () => {
    const result = await client.query(`SELECT * FROM "coffee"`);
    const coffees = result.rows;
    return coffees;
  },
  findDetailCoffee: async (id) => {
    const result = await client.query(`SELECT * FROM "coffee" WHERE id = $1`, [id]);
    const coffee = result.rows[0];
    return coffee;
  }
}

module.exports = dataMapper;

