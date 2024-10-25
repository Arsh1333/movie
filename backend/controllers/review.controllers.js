import { Review } from "../models/Review.models.js";

const addReviews = async (req, res) => {
  const { content, themes, rating, title } = req.body;
  const newReview = new Review({
    content: content,
    themes: themes,
    rating: rating,
    title: title,
  });
  newReview
    .save()
    .then((entry) => res.status(201).json(entry))
    .catch((err) => res.status(400).json({ error: err.message }));
};
const getReviews = async (req, res) => {
  try {
    const review = await Review.find();
    res.status(200).json(review);
  } catch (error) {
    console.log(error);
  }
};

export { getReviews, addReviews };
