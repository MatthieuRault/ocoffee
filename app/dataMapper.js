const client = require('./database.js');

const dataMapper = {
  findAllCoffees: async () => {
    const result = await client.query(`SELECT * FROM "coffee" LIMIT 3`);
    const coffees = result.rows;
    return coffees;
  }
}

module.exports = dataMapper;

