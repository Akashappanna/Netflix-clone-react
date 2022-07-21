import React, { useEffect, useState } from "react";
import api, { API } from "../../api/api";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${API.base}${api.fetchNetflixOriginal}`);
      const data = await response.json();
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchMovie();
  }, []);

  const truncateString = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  console.log(movie);

  return (
    <div
      className="relative"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(
          "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`
          : "",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "65vh",
        // boxShadow: "inset 0px -20px 20px 20px #000000d6",
      }}
    >
      <div className="flex flex-col items-start justify-center px-5 h-full">
        <h3 className="text-white font-extrabold text-4xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h3>

        <div className="flex flex-row mt-7 text-white">
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 mr-3 rounded"
          >
            Play
          </button>
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 ml-3 rounded"
          >
            My List
          </button>
        </div>

        <div className="text-white font-medium mt-4 w-2/5 text-left text-sm">
          {truncateString(movie.overview, 150)}
        </div>
      </div>

      <div className="img-wrap"></div>
    </div>
  );
};

export default Banner;
