import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// pages-----
import Home from "../pages/Home";
// import Detail from "../pages/Detail";
import Detailcopy from "../pages/Detailcopy";
import Manikganj from "../pages/Manikganj";
import Media from "../pages/Media";
import Others from "../pages/Others";
import Error from "../pages/Error";
import Navbar from "./Navbar";
const MainPage = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/:title" element={<Detail />}></Route> */}
        <Route path="/:title" element={<Detailcopy />}></Route>
        <Route path="/manikganj" element={<Manikganj />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/others" element={<Others />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainPage;
