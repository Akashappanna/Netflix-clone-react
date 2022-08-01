import React ,{ useEffect, useState } from 'react'
//css
import classes from './SmallDesc.module.css'



const SmallDesc = ({smallMovieData,pos}) => {
    
  const truncateString = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };


  return (
    <div 
    className={`absolute 
    bg-white py-7 px-2  ${pos?classes['right-style']:classes['single-movie']}
    `}
    >
        <div className='w-full text-red-800 font-bold'>
          {smallMovieData.movieName}
        </div>
        <div className='w-full'>
          <h3 className='font-bold text-start text- pt-4 pb-1'>
            Description : 
          </h3>
          <span className='block text-xs md:text-sm text-start'>
            {truncateString(smallMovieData.description,250)}
          </span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <span className={`block ${classes.imdb}`}>IMDB : </span>
          <span className='block font-extrabold italic'>&nbsp; &nbsp; {smallMovieData.imdb}</span>
        </div>
    </div>
  )
}

export default SmallDesc