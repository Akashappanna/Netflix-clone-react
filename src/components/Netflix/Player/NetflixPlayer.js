import React, { useState,useContext, useEffect } from 'react';
import { API } from "../../api/api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useLocation } from 'react-router-dom';
import {AiFillPlayCircle} from 'react-icons/ai'
import Header from '../Header/Header';
import './NetflixPlayer.css'
import Row from '../Row/Row';
import Footers from '../../Footers/Footers';


const base_url = "https://image.tmdb.org/t/p/original/";


const NetflixPlayer = (props) => {
    const [trailerURL, setTrailerURL] = useState([]);
    const location=useLocation();
    const {movie,fetchUrl} = location.state;


    const movieName=movie.name || movie.original_title || movie.original_name || movie.title;

    const opts = {
        width: "100%",
        height: "650",
        playerVars: {
          autoplay: 1,
        },
      };

      console.log(trailerURL)

    const playTrailer = () => {
        if (trailerURL.length > 0) {
          setTrailerURL([]);
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


      const scrollUpHandler = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      useEffect(() => {
        setTrailerURL([]);
        setTimeout(() => {
          window.addEventListener('scroll',scrollUpHandler())
        }, 100);
      }, [movie]);

      const Youtube=()=>{
        for (var i=0;i<trailerURL.length;i++){
          try{
            return(
            <React.Fragment>
            <YouTube videoId={trailerURL[i]} opts={opts}/>
            </React.Fragment>
            );
          }catch(error){
            if(i === trailerURL.length-1){
              return(
                <div  className='font-extrabold flex flex-col justify-center items-center'
                style={{color:'red',width: "100%",height: "650px",backgroundColor:'black',}}
                >Trailer not found</div>
              )
            }
             continue;
          }
        }
      }
    

  return (
    <React.Fragment>
    <Header />
    <div className='bg-black p-4 h-fit' style={{width: "100%",height: "100%",overflow: 'hidden'}}>
        {trailerURL.length === 0  && <div>
                <div style={{width: "100%",height: "650px",overflow:'hidden'}}
                className="relative rounded" >
                <img src={`${base_url}${movie.backdrop_path }`} alt={movie.name} 
                    className='w-full'
                    />
                <AiFillPlayCircle className='absolute inset-x-1/2 inset-y-1/2 player' size={100} 
                onClick={playTrailer}/>
                </div>
                <p className='text-white font-thin'>If player does not work please try again later.</p>
        </div>}

        {/* //youtube */}
        {trailerURL !==null && <Youtube />}


        <div className='w-full text-white text-start flex'>
            <div className='w-1/2'>
                <h3 className='w-full font-extrabold text-4xl py-4'> {movieName}</h3>
                <p className='text-xl font-extrabold'>
                    Description : 
                    <span className='block font-light'>{movie.overview}</span>
                </p>
                <p className='font-extrabold py-4'>IMDB : {movie.vote_average}</p>
            </div>
            <div className='text-red-800 font-bold text-2xl ml-9 px-4 py-7'>
                Trailer : <span className='bg-white rounded px-2 text-xl text-black'
                >HD</span>
            </div>
        </div>
        <Row title="Related" fetchUrl={fetchUrl} isLarge={true} isSmall={true}/>
       <Footers />
    </div>
    </React.Fragment>
  )
}


export default NetflixPlayer