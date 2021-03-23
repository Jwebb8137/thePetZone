import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ContextComponent from "../ContextComponent/ContextComponent";
import SearchForm from "../SearchForm/SearchForm";
import Carousel from "../Carousel/Carousel";
import MainVid from "../../assets/main-bg.mp4";
import CatImg from "../../assets/home-cat.jpg";
import DogImg from "../../assets/home-dog.jpg";
import HomeSliderImg1 from "../../assets/home-slider-cat-1.jpg";
import HomeSliderImg2 from "../../assets/home-slider-cat-2.jpg";
import HomeSliderImg3 from "../../assets/home-slider-cat-3.jpg";
import HomeSliderImg4 from "../../assets/home-slider-cat-4.jpg";
import HomeSliderImg5 from "../../assets/home-slider-cat-5.jpg";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <Fragment>
      <div className="container fade-in p-0 m-0">
        <i class="fas fa-paw green display-paw mt-3 mb-2 w-100"></i>
        <div className="fade-in-1 w-100">
          <h3 className="display-heading mb-0">Ready To Find</h3>
          <h3 className="sub-heading mb-3">That Special Someone?</h3>
          <button type="submit" id="display-search" class="btn submit w-75">
            Search Now <i class="fas fa-caret-right"></i>
          </button>
        </div>
        <Link to="Search">
          <video className="video-full" autoPlay muted loop>
            <source src={MainVid} type="video/mp4" />
            <source src={MainVid} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Link>
        <i class="fas fa-paw green lg-paw mt-3 mb-2"></i>
        <h2>
          Helping To Find Their
          <br />
          Furever Homes{" "}
        </h2>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <img src={CatImg} className="w-75 r-50" />
          <h2 className="mt-3 mb-0">
            Meet Patches <i class="fas fa-heart"></i>
          </h2>
          <p className="home-p px-4 mt-1 mb-0">
            One of many loving cats who deserve a loving home!
          </p>
        </div>
        <h2 className="neg-margin-5">Available For Adoption!</h2>
        <div className="scrolling-wrapper m-0 px-4">
          <img src={HomeSliderImg1} className="slider-img col-4 w-75 mx-2" />
          <img src={HomeSliderImg2} className="slider-img col-4 w-75 mx-2" />
          <img src={HomeSliderImg3} className="slider-img col-4 w-75 mx-2" />
          <img src={HomeSliderImg4} className="slider-img col-4 w-75 mx-2" />
          <img src={HomeSliderImg5} className="slider-img col-4 w-75 mx-2" />
        </div>
        <div className="col-12">
          <img src={DogImg} className="w-75 r-50" />
          <h2 className="mt-3 mb-0">
            Meet Chester! <i class="fas fa-heart"></i>
          </h2>
          <p className="home-p px-4 mt-1 mb-0">
            One of many loving dogs who deserve a loving home!
          </p>
        </div>
      </div>
      <Carousel />
    </Fragment>
  );
};

export default HomeScreen;
