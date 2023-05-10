const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid email or password");
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token to the client
    return res.status(200).send({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        studentCardId: user.studentCardId,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

module.exports = login;