const Sequelize = require('sequelize');
require('dotenv').config()

// Create a Sequelize instance and connect to your MySQL database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER_NAME,
    process.env.DB_USER_PWD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);
// Sync the model with the database
sequelize.sync()
    .then((res) => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.error('Database connected unsuccessfully.');
    });
module.exports = sequelize;