import express from "express";
import { authenticateToken } from "../middleware/authenticate.token.js";
import {
  addReviews,
  deleteReviews,
  getReviews,
  getReviewsByUser,
} from "../controllers/review.controllers.js";
const reviewRouter = express.Router();

reviewRouter.get("/getReviews", getReviews);
reviewRouter.get("/getReviewsByUser", authenticateToken, getReviewsByUser);
reviewRouter.post("/postReviews", authenticateToken, addReviews);
reviewRouter.delete("/:id", deleteReviews);

export default reviewRouter;
