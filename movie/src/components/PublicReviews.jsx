import React, { useState, useEffect } from "react";
import axios from "axios";

// Review Card Component
const ReviewsList = ({ reviews }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {reviews.map((review) => (
        <div key={review._id} className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {review.title}
              <div className="badge badge-secondary">{review.rating}/10</div>
            </h2>
            <p>{review.content}</p>
            <p>
              <strong>Themes:</strong> {review.themes}
            </p>
            <p>
              <strong>Reviewed by:</strong> {review.owner.username}
            </p>
            <p>
              <strong>Reviewed on:</strong> {review.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Component
const PublicReviews = () => {
  const [userReviews, setUserReviews] = useState([]); // Store reviews as an array

  const getReviews = async () => {
    try {
      const response = await axios.get(
        "https://moviereview-th0i.onrender.com/api/reviews/getReviews"
      );
      console.log(response.data);
      setUserReviews(response.data); // Update state with fetched reviews
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews(); // Fetch reviews on component mount
  }, []);

  return (
    <div>
      <ReviewsList reviews={userReviews} /> {/* Pass reviews to ReviewsList */}
    </div>
  );
};

export default PublicReviews;
