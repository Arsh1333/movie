import React from "react";
import axios from "axios";
import { useState } from "react";

const MainPage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const [load, setLoad] = useState("");
  const [dec, setDec] = useState(" ");

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
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
          <a className="btn btn-ghost text-xl">moviesForU </a>
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
                <button className="btn btn-primary sm: mr-[80px] mt-[10px]">
                  Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
