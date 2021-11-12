import { validationResult } from "express-validator";

import Hospital from "../models/Hospital.js";

// @route    GET api/hospital
// @desc     Get hospitals
const getHosps = async (req, res) => {
  try {
    const hosps = await Hospital.find().populate({
      path: "user",
      select: "-password",
    });

    res.json(hosps);
  } catch (error) {
    console.log(error);
    res.send("Server Error");
  }
};

// @route    POST api/hospital
// @desc     Add hospital for user
const addHosp = async (req, res) => {
  const {
    name,
    city,
    state,
    tags,
    withoutOx,
    withOx,
    icuWithoutVents,
    icuWithVents,
  } = req.body;

  try {
    const newHosp = new Hospital({
      user: req.user.id,
      name,
      city,
      state,
      tags,
      beds: {
        withoutOx,
        withOx,
        icuWithoutVents,
        icuWithVents,
      },
    });

    await newHosp.save();

    res.json(newHosp);
  } catch (error) {
    console.log(error);
    res.send("Server Error");
  }
};

const getUserHosps = async (req, res) => {
  try {
    const hosps = await Hospital.find({ user: req.user.id });
    res.json(hosps);
  } catch (error) {
    console.log(error);
    res.send("Server Error");
  }
};

export { getHosps, addHosp, getUserHosps };
