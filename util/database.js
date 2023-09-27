const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense", "root", "Aj*****", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
