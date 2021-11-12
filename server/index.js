import dotenv from "dotenv";
dotenv.config();
import express from "express";
import chalk from "chalk";
import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import hospitalRoutes from "./routes/hospital.js";

const app = express();
app.use(cors());
app.use(express.json());

//Connect Database
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hospitals", hospitalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(chalk.yellow.bold("Server is running on port:", PORT))
);
