import React, { useEffect, useState } from "react";
import Image from "./Image";

const NewRow = (props) => {
  const { title, isLarge, isSmall, fetchUrl } = props.subData;
  const movies = props.data;
  const [pointerDis, setPointerDis] = useState(false);

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
        <div className={`flex flex-row py-4 mx-auto relative`}>
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
