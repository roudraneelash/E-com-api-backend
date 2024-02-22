import express from "express";
import userController from "./userController.js";
import { validateSignUp } from "../../middleware/validateUser.js";

const userRouter = express.Router();

userRouter.get("/getAll", userController.getAll);
userRouter.post("/signUp", validateSignUp, userController.signUp);
userRouter.post("/signIn", userController.signIn);

export default userRouter;
