const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { exists } = require("../models/userModel");

/**
 * @param {string} _id
 * @param {string} email
 */
const createToken = (_id, email) => {
  return jwt.sign({ _id, email }, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exsits = await User.findOne({ email });
    if (exsits) {
      return res.status(400).json({ error: "This email is already taken" });
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hash });
    const token = createToken(user._id, user.email);

    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "This email is already taken" });
    }

    const matches = await bcrypt.compare(password, user.password);
    if (!matches) {
      return res.status(400).json({ error: "This email is already taken" });
    }

    const token = createToken(user._id, user.email);

    res.status(200).json({ token });
  } catch (e) {
    res.status(400).json({ error: "This email is already taken" });
  }
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const userUpdate = async (req, res) => {
  const id = req.user._id;
  const { email, password } = req.body;
  try {
    const updateData = {};

    if (email) {
      const exsists = await User.findOne({ email });
      if (exsists) {
        return res.status(404).json({ error: "This email is already taken" });
      }
      updateData.email = email;
    }

    if (password) {
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(password, salt);
      updateData.password = hash;
    }

    const user = await User.findOneAndUpdate({ _id: id }, { $set: updateData });

    const resEmail = user.email;
    const token = createToken(user._id);
    res.status(200).json({ resEmail, token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { signup, login, userUpdate };
