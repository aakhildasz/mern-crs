import express from "express";
import {
  signin,
  signup,
  google,
  singout,
} from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/google", google);
authRouter.get("/signout", singout);

export default authRouter;
