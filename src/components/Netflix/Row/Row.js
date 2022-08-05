import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import NewRow from "./NewRow";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const { title, fetchUrl, isLarge, isSmall } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`${API.base}${fetchUrl}`);
      const data = await response.json();
      setMovies(data.results);
    };

    sendRequest();
  }, [fetchUrl]);

  return (
    <NewRow
      data={movies}
      subData={{
        title: title,
        isLarge: isLarge,
        fetchUrl: fetchUrl,
        isSmall: isSmall,
      }}
    />
  );
};

export default Row;
