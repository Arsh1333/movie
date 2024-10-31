import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainPage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [themes, setThemes] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const [load, setLoad] = useState("");
  const [dec, setDec] = useState(" ");

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };
  const handleReviewSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/reviews/postReviews",
        {
          // Include any data you want to send along with the post request, for example:
          content,
          title: movieDetails.Title,
          rating,
          themes,
          // Add other fields as necessary
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data); // Logs the response data
    } catch (err) {
      console.error("Token:", token);
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };
  const movieResponse = async () => {
    const response = axios
      .get(`https://www.omdbapi.com/?t=${searchMovie}&apikey=3cb18b0`)
      .then((res) => {
        setMovieDetails(res.data);
        console.log(res.data);
        setLoad(1);
        setDec("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(searchMovie);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <a className="btn btn-ghost text-xl">moviesForU </a> */}
          <Link to="/" className="btn btn-ghost text-xl">
            moviesForU
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              value={searchMovie}
              onChange={handleSearchMovie}
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button
            onClick={movieResponse}
            className="btn btn-outline btn-success"
          >
            GO
          </button>
        </div>
      </div>
      <div>
        {dec && (
          <h1 className="m-[20px] text-[50px] opacity-45">
            SEARCH MOVIES , all movie details will be displayed here
          </h1>
        )}
        {load && (
          <div className="card card-side bg-base-100 shadow-xl m-[30px] sm: flex-col md:flex-row">
            <figure>
              <img
                className="rounded-xl"
                src={movieDetails.Poster}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {movieDetails.Title}
                <span className="text-[10px] w-[10px]">
                  ({movieDetails.Year})
                </span>
              </h2>
              <p>{movieDetails.Plot}</p>
              <p>IMDB: {movieDetails.imdbRating}</p>
              <div className="card-actions justify-end">
                {/* <Link to="/">
                  {" "}
                  <button className="btn btn-primary sm: mr-[80px] mt-[10px]">
                    Review
                  </button>
                </Link> */}
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Review
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </form>
                    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                    <p className="py-4">
                      Give your review and and ratings for{" "}
                      <span className="text-green-500">
                        {movieDetails.Title}{" "}
                      </span>
                    </p>
                    <div className="modal-action">
                      <div className="py-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-700"
                          htmlFor="movieTitle"
                        >
                          Movie Review
                        </label>
                        <input
                          id="movieTitle"
                          name="movieTitle"
                          type="text"
                          className="input input-bordered w-full"
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Enter the movie review"
                          required
                        />
                      </div>
                      <div className="py-2">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-700"
                          htmlFor="movieTitle"
                        >
                          Overall Ratings
                        </label>
                        <input
                          id="movieTitle"
                          name="movieTitle"
                          type="text"
                          className="input input-bordered w-full"
                          placeholder="(1-lowest 10-highest)"
                          onChange={(e) => setRating(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="py-2">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-700"
                        htmlFor="movieTitle"
                      >
                        Themes
                      </label>
                      <input
                        id="movieTitle"
                        name="movieTitle"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter the movie themes (eg : sad,happy etc)"
                        onChange={(e) => setThemes(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      className="btn btn-primary m-[20px]"
                      onClick={handleReviewSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
