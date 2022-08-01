import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import NetflixHome from "./pages/NetflixHome";
import NetflixPlay from "./pages/NetflixPlay";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netflix" element={<NetflixHome />} />
        <Route path='/netflix/:playId' element={<NetflixPlay />} />
        {/* <Route path="/newpage" element={<NewPage />} /> */}
      </Routes>
    </div>
  );
}

//https://i.ibb.co/vXqDmnh/background.jpg
export default App;
