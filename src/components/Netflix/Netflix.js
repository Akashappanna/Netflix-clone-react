import React, { useEffect } from "react";
import Header from "./Header/Header";
import api, { API } from "../api/api";
import Row from "./Row/Row";
import Banner from "./Banner/Banner";
import Footers from "../Footers/Footers";

const Netflix = () => {
  return (
    <div className="h-fit">
      <Header />
      <Banner />
      <Row
        title="NetFlix Originals"
        fetchUrl={api.fetchNetflixOriginal}
        isLarge
      />

      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Trending" fetchUrl={api.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedy} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomance} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorror} />
      <Row title="Documentary" fetchUrl={api.fetchDocumentary} />
      <Footers />
    </div>
  );
};

export default Netflix;
