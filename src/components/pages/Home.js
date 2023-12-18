import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Home.css";
import Carousel from "../Craousel";

const Home = () => {
  return (
    <div className="home-main">
      <h2 className='home-h2'>Featured Products</h2>
      <p className="home-sub">Explore and discover a variety of products</p>
      <div>
        <Carousel />
      </div>

    </div>
  );
};

export default Home;
