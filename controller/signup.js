const User = require("../models/user");

exports.postSIgnUpUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      await User.create({ name, email, password });
      return res.status(201).json({ message: "success" });
    } catch (error) {
      console.log(">>>>>>>>>>>>>>>>>",error.name);
      return res.status(500).json({ message: "Failed to create user :", error: error.name });
    }
  }