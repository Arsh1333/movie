import express from "express";
import {
  addReviews,
  deleteReviews,
  getReviews,
} from "../controllers/review.controllers.js";
const reviewRouter = express.Router();

reviewRouter.get("/getReviews", getReviews);
reviewRouter.post("/postReviews", addReviews);
reviewRouter.delete("/:id", deleteReviews);

export default reviewRouter;
