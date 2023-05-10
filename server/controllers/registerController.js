const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    const { name, email, password, studentCardId } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).send("User already exists");
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      studentCardId,
    });

    // Save the user object to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the token to the client
    return res.status(201).send({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        studentCardId: newUser.studentCardId,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
}

module.exports = registerUser;
