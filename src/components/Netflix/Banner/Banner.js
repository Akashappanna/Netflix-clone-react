import React, { useEffect, useState } from "react";
import api, { API } from "../../api/api";
import { Link } from "react-router-dom";
import "./Banner.css";
import YouTube from "react-youtube";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerURL, setTrailerURL] = useState(null);
  const [play,setPlay]=useState(false);
  const [loading,setLoading] =useState(false);

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


  const toggleView = () => {
    if (window.pageYOffset > 300) {
      setPlay(false);
    } else {
     const new_timer= setTimeout(() => {
        setPlay(true);
      }, 5000);
      return (()=>clearTimeout(new_timer))
    }
  };

  const playTrailer = () => {
    setLoading(true);
    if (trailerURL) {
      setTrailerURL("");
    } else {
      const sen = async () => {
        const res = await fetch(
          `${API.base}/${movie.media_type?movie.media_type:'tv'}/${movie.id}/videos?api_key=${
            API.key
          }&language=en-US`
        );
        const da = await res.json();
        let movieData=[];
        da.results.map((data) => {
          if (data.name === "Official Trailer") {
            movieData.unshift(data.key)
          }else{
            movieData.push(data.key)
          }
            setTrailerURL(movieData);
            setPlay(true);
        });
      };
      sen();
    }
  };

  useEffect(()=>{
    const timer = setTimeout(() => {
      playTrailer();
    }, 4000);

    return(()=>clearTimeout(timer))

  },[movie])

  useEffect(() => {
      window.addEventListener("scroll", toggleView);

    return () => {
      window.removeEventListener("scroll", toggleView);
    };
  }, []);

  const opts = {
    width: "100%",
    height: "650",
    playerVars: {
      autoplay: 1,
      loop:1,
      paused:!play?1:0,
    },
  };
  

  const Youtube=()=>{
    for (var i=0;i<trailerURL.length;i++){
      try{
        return(
        <YouTube videoId={trailerURL[i]} opts={opts}/>
        );
      }catch(error){
        if(i === trailerURL.length-1){
          return(
            <div style={{color:'white'}}>Trailer not found</div>
          )
        }
         continue;
      }
    }
  }

  return (
    <React.Fragment>
    {!play &&  <div
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
      <div className="flex flex-col items-start justify-center px-5 h-full" style={{textShadow: 'black 12px 12px 20px'}}>
        <h3 className="text-white font-extrabold text-4xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h3>
        <div className="flex flex-row mt-7 text-white">
          <Link to={`/netflix/${movie.id}`} state={{movie:movie,fetchUrl:`${api.fetchNetflixOriginal}`}}>
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 mr-3 rounded"
          >
            Play
          </button>
          </Link>
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 ml-3 rounded"
          >
            My List
          </button>
        </div>

        <div className="text-white font-medium mt-4 w-2/5 text-left text-sm" style={{textShadow:'2px 1px 3px black'}}>
          {truncateString(movie.overview, 150)}
        </div>
      </div>

      <div className="img-wrap"></div>
    </div>}


    {play && <div
      className="relative"
      style={{
        height: "65vh",
      }}
    >
      <Youtube className='h-full'/>
      <div className="flex flex-col items-start justify-center z-50 px-5 h-fit absolute top-40 w-1/2">
        <h3 className="text-white font-extrabold text-start text-4xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h3>
        <div className="flex flex-row mt-7 text-white">
          <Link to={`/netflix/${movie.id}`} state={{movie:movie,fetchUrl:`${api.fetchNetflixOriginal}`}}>
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 mr-3 rounded"
          >
            Play
          </button>
          </Link>
          <button
            type="button"
            className="bg-opacity-60 bg-black px-6 py-2 ml-3 rounded"
          >
            My List
          </button>
        </div>

        <div className="text-white font-medium mt-4 w-fit text-left text-sm">
          {truncateString(movie.overview, 150)}
        </div>
      </div>

      <div className="img-wrap"></div>
    </div>}
    </React.Fragment>
  );
};

export default Banner;
