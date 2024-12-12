const userModel = require("../models/user.model.js");
const userService = require("../services/user.service.js");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model.js");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUserProfile = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({ token });
  res.status(200).json({ message: "Logged out successfully" });
};
