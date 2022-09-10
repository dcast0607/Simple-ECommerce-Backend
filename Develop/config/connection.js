// This package is required to be able to use environment variables
require("dotenv").config();

const Sequelize = require("sequelize");

// If the application is hosted through a web service provider our 
// app will connect to a web hosted version of our database, otherwise
// we will connect to a local version of our database.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
