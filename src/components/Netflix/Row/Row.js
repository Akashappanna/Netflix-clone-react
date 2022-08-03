import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import Image from "./Image";




const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl, isLarge,isSmall} = props;
  const [pointerDis,setPointerDis] = useState(false);


  const settings =  {
    arrowsScroll: 4,
    duration: 400,
    shift: 100,
    slidesPerRow: 5,
    virtualList: true,
    wheel: false,
    wheelScroll: 0,
  };

  const toggleView = (e) => {
    if(e.screenX > 650){
      setPointerDis(true);
      return;
    }
    setPointerDis(false);
  };

 
  useEffect(()=>{
    window.addEventListener('mouseover',toggleView)

    return (()=>{
      window.removeEventListener('mouseover',toggleView)
    })
},[])
 


  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`${API.base}${fetchUrl}`);
      const data = await response.json();
      setMovies(data.results);
    };

    sendRequest();
  }, [fetchUrl]);

  
  

  return (
    <div className="bg-black relative">
      <h3 className="text-2xl text-white font-bold text-start w-90 m-auto">
        {title}
      </h3>
      
        <div className={`flex flex-row py-4 mx-auto relative ${isSmall?'flex-wrap':'flex-nowrap'}`}>
        {movies && movies.map((movie, index) => (
            <React.Fragment key={index}>
              <Image   movie={movie} isLarge={isLarge} fetchUrl={fetchUrl} isSmall={isSmall} 
              pos={pointerDis}
              />
            </React.Fragment>
          ))}
      </div>


    </div>
  );
};

export default Row;
