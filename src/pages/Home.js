import React from "react";
import Footers from "../components/Footers/Footers";
import Headers from "../components/Headers/Headers";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Headers />
      <Footers />
    </React.Fragment>
  );
};

export default Home;
