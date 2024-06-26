import React from "react";
import './Hero.css'
import img from '../../assets/imgs/soat1.svg'

const Hero = () => {
  return (
    <>
    <main className="hero">
    <div className="container">
        <div className="flex">
          <div className="text_wrapper">
            <h2>Discover Most Suitable Watches</h2>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <form className="search_form">
              <input type="text" placeholder="Search" />
              <button>Search</button>
            </form>
          </div>
          <div className="image_wrapper">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Hero;
