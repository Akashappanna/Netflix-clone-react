import React, { useEffect, useState } from "react";
import Image from "./Image";
import Carousel from "react-elastic-carousel";
import "./NewRow.css";

const NewRow = (props) => {
  const { title, isLarge, isSmall, fetchUrl } = props.subData;
  const movies = props.data;
  const [pointerDis, setPointerDis] = useState(false);

  const responsive = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1360, itemsToShow: 8 },
  ];

  const toggleView = (e) => {
    if (e.screenX > 650) {
      setPointerDis(true);
      return;
    }
    setPointerDis(false);
  };

  useEffect(() => {
    window.addEventListener("mouseover", toggleView);

    return () => {
      window.removeEventListener("mouseover", toggleView);
    };
  }, []);

  return (
    <div className={`bg-black relative `}>
      <h3 className="text-2xl text-white font-bold text-start w-90 m-auto">
        {title}
      </h3>

      {!isSmall && (
        <Carousel
          breakPoints={responsive}
          className={`flex flex-row mx-auto relative py-6`}
        >
          {movies &&
            movies.map((movie, index) => (
              <Image
                key={index}
                movie={movie}
                isLarge={isLarge}
                fetchUrl={fetchUrl}
                isSmall={isSmall}
                pos={pointerDis}
              />
            ))}
        </Carousel>
      )}

      {isSmall && (
        <div className={`flex flex-row py-4 mx-auto relative flex-wrap `}>
          {movies &&
            movies.map((movie, index) => (
              <Image
                key={index}
                movie={movie}
                isLarge={isLarge}
                fetchUrl={fetchUrl}
                isSmall={isSmall}
                pos={pointerDis}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default NewRow;
