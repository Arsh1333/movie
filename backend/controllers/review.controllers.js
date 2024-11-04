import { Review } from "../models/Review.models.js";
import mongoose from "mongoose";
import { authenticateToken } from "../middleware/authenticate.token.js";

const addReviews = async (req, res) => {
  const { content, themes, rating, title } = req.body;
  try {
    // Create the review with owner's ID from req.user._id
    let review = await Review.create({
      content,
      themes,
      rating,
      title,
      owner: req.user._id,
    });

    // Populate the owner's name (and any other fields you want) in the response
    review = await review.populate("owner", "username");

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // newReview
  //   .save()
  //   .then((entry) => res.status(201).json(entry))
  //   .catch((err) => res.status(400).json({ error: err.message }));
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("owner", "username");
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
  }
};
const getReviewsByUser = async (req, res) => {
  try {
    const review = await Review.find({ ownerId: req.user._id }).exec();
    res.status(200).json(review);
  } catch (error) {
    console.log(error);
  }
};
const deleteReviews = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such review or post" });
    }
    const review = await Review.findOneAndDelete({ _id: id });
    if (!review) {
      return res.status(404).json({ error: "No such reviews" });
    }
    res.status(200).json(review);
  } catch (error) {
    console.log(error);
  }
};
export { getReviews, addReviews, deleteReviews, getReviewsByUser };
