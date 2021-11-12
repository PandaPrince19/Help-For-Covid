import express from "express";
import { check } from "express-validator";

const router = express.Router();

import auth from "../middleware/auth.js";
import {
  getHosps,
  addHosp,
  getUserHosps,
} from "../controllers/hospitalController.js";

// @route    GET api/hospital
// @desc     Add hospital for user
// @access   Private
router.get("/", getHosps);

// @route    POST api/hospital
// @desc     Add hospital for user
// @access   Private
router.post("/", auth, addHosp);

// @route    POST api/hospital
// @desc     Add hospital for user
// @access   Private
router.get("/user", auth, getUserHosps);

export default router;
