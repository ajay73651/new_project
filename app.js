const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./models/user");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/user/sigup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.status(201).json({ message: "success" });
  } catch (error) {
    console.log(">>>>>>>>>>>>>>>>>",error.name);
    return res.status(500).json({ message: "Failed to create user :", error: error.name });
  }
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
