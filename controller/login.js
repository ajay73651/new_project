const User = require("../models/user");

exports.getLogInUser = async (req, res) => {
  try {
    const { email, password } = req.query; 

    const user = await User.findOne({ where: { email } });

    if (user && user.password === password) {
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(401).json({ error: "InvalidCredentialsError" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
