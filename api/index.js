import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 7000;

// By default we are not allowed to send any JSON to the server so to allow use the below
app.use(express.json());
// to get cookie or to get information from cookie
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

// separated routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// creating middleware for handling errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
