import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home";
import NetflixHome from "./pages/NetflixHome";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netflix" element={<NetflixHome />} />
      </Routes>
    </div>
  );
}

//https://i.ibb.co/vXqDmnh/background.jpg
export default App;
