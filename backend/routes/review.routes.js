import express from "express";
import { addReviews, getReviews } from "../controllers/review.controllers.js";
const reviewRouter = express.Router();
reviewRouter.get("/getReviews", getReviews);
reviewRouter.post("/postReviews", addReviews);
export default reviewRouter;
