import express from "express";
import {
  getAllUsers,
  login,
  register,
} from "../controllers/user.controllers.js";
const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/getUsers", getAllUsers);
export default userRouter;
