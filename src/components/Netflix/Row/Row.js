import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
// import Card from "../Card/Card";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  const { title, fetchUrl, isLarge, tv } = props;

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`${API.base}${fetchUrl}`);
      const data = await response.json();
      setMovies(data.results);
    };

    sendRequest();
  }, [fetchUrl]);

  const playTrailer = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      const sen = async () => {
        const res = await fetch(
          `${API.base}/${tv ? tv : "movie"}/${movie.id}/videos?api_key=${
            API.key
          }&language=en-US`
        );
        const da = await res.json();
        const newda = da.results.map((data) => {
          if (data.name === "Official Trailer") {
            // console.log(data.key);
            setTrailerURL(data.key);
          }
        });
      };
      sen();
      // movieTrailer(movie?.name || "")
      //   .then((url) => {
      //     const urlParams = new URLSearchParams(new URL(url).search);
      //     console.log(url);
      // setTrailerURL(urlParams.get("v"));

      // movieTrailer(null, { tmdbId: movie.id })
      //   .then((url) => {
      //     console.log("url is " + url);
      //   })
      //   .catch((error) => console.log(error));
    }
  };

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="bg-black relative">
      <h3 className="text-2xl text-white font-bold text-start w-90 m-auto">
        {title}
      </h3>
      <div className=" flex flex-row py-4 relative overflow-hidden">
        {movies &&
          movies.map((movie, index) => (
            <img
              key={index}
              onClick={() => playTrailer(movie)}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`w-2/5 md:w-72 md:px-4 px-2 h-fit  hover:scale-125 transition-all duration-300 cursor-pointer ${
                isLarge ? "rounded-3xl md:w-56 w-1/5" : ""
              }`}
            />
          ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
