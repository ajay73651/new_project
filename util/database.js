const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense", "root", "Ajay@19804", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
