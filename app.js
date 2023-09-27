const path = require("path");
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const logInRoutes = require('./routes/login');
const signUpRoutes = require('./routes/signup');

app.use(signUpRoutes);
app.use(logInRoutes)

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
