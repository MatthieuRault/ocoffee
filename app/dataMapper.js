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
    const result = await client.query(`SELECT coffee.*, category.name AS cat_name, category.id AS cat_id FROM "coffee" JOIN 
    "category" ON coffee.category_id = category.id WHERE coffee.id = $1`, [id]);
    const coffee = result.rows[0];
    coffee.available = coffee.available ? 'Oui' : 'Non';
    // Equivalent de :
    //   if (coffee.available) {
    //   coffee.available = "Oui";
    // } else {
    //   coffee.available = "Non";
    // }
    return coffee;
  }
}

module.exports = dataMapper;