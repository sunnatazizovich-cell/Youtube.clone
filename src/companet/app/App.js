import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/main"
import Channel from "../channel/channel";
import Search from "../search/search";
import Navbar from "../navbar/navbar";
import VideoDetail from "../video-detail/video-detail";

const App= () => {
  return (
      <>
          <Navbar/>
    <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='/search/:id' element={<Search/>}/>
         <Route path='/channel/:id' element={<Channel/>}/>
         <Route path='/video/:id' element={<VideoDetail/>}/>


    </Routes>
          </>
  );
}

export default App;
