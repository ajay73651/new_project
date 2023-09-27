const Sequelize = require("sequelize");

const sequelize = new Sequelize("user", "root", "Aj****", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
