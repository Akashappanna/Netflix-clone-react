import { getByTitle } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import NetflixPlay from '../../../pages/NetflixPlay';
import SmallDesc from "../SmallDesc/SmallDesc";
import classes from '../SmallDesc/SmallDesc.module.css'
import {Link} from 'react-router-dom';



const base_url = "https://image.tmdb.org/t/p/original/";

const Image = ({movie,isLarge,fetchUrl,isSmall,pos}) => {
    const [hovered,setHovered] = useState({'hover':false});

    function gatherData(){
        const {name,original_title,overview,original_name,title,vote_average} = movie;
        const movieName=name || original_title || original_name || title;
        const description=overview;
        const imdb=vote_average;

        return {
            movieName,description,imdb
        }
    }

    const smallMovieData=gatherData();


    const hoverHandler=(movieData)=>{
        const new_movie = {...movieData};
         new_movie['hover']=true;
         setHovered(new_movie);
       }
      const hoverOutHandler =(movieData) =>{
         const newMovieData={...movieData};
         newMovieData.hover=false;
         setHovered(newMovieData);
      }

  return (
    <React.Fragment>
    <div  className={`relative w-full  md:px-4 px-2 flex justify-center  hover:scale-125 hover:z-50 transition-all duration-300 cursor-pointer
    ${isSmall?'w-1/4 md:w-1/5 xl:w-1/6 my-3':''}`}>
        <Link to={`/netflix/${movie.id}`} state={{movie:movie,fetchUrl:fetchUrl}}>
        <img
            className={`w-32 md:w-44 max-w-fit ${
            isLarge ? "rounded-3xl" : ""}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onMouseEnter={()=>hoverHandler(movie)}
              onMouseLeave={()=>hoverOutHandler(hovered)}
            />
        </Link>
            {hovered.hover === true &&<SmallDesc smallMovieData={smallMovieData} pos={pos}/>}
    </div>
    </React.Fragment>
  )
}

export default Image
