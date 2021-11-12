import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import User from "../models/User.js";

//@desc Create User
const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { govId, regEmail, name, type, regPassword } = req.body;

  try {
    const user = await User.findOne({ email: regEmail });
    if (user)
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(regPassword, salt);

    const newUser = new User({
      govId,
      email: regEmail,
      name,
      type,
      password: hashedPassword,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export { createUser };
