import express from "express";
import { check } from "express-validator";

import auth from "../middleware/auth.js";
import { getUser, authUser } from "../controllers/authController.js";

const router = express.Router();

// @route    GET api/auth
// @desc     Get user
// @access   Private
router.get("/", auth, getUser);

// @route    POST api/auth
// @desc     Authenticate user
// @access   Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").notEmpty(),
  ],
  authUser
);

export default router;
