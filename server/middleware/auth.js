import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  //Get token from header
  const token = req.headers.authorization?.split(" ")[1];

  //Check if no token
  if (!token)
    return res
      .status(401)
      .json({ errros: [{ msg: "No token, authorization denied" }] });

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ errros: [{ msg: "No token, authorization denied" }] });
  }
};

export default auth;
