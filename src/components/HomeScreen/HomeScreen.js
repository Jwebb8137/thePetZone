import React, { Fragment } from "react";
import ContextComponent from "../ContextComponent/ContextComponent";
import SearchForm from "../SearchForm/SearchForm";
import Carousel from "../Carousel/Carousel";
import MainVid from "../../assets/main-bg.mp4";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <Fragment>
      <div className="container fade-in p-0 m-0">
        <i class="fas fa-paw green display-paw mt-3 mb-2 w-100"></i>
        <div className="fade-in-1 w-100">
          <h3 className="display-heading">Ready To Find</h3>
          <h3 className="sub-heading">That Special Someone?</h3>
          <button type="submit" id="display-search" class="btn submit w-75">
            Search Now <i class="fas fa-caret-right"></i>
          </button>
        </div>
        <video className="video-full" autoPlay muted loop>
          <source src={MainVid} type="video/mp4" />
          <source src={MainVid} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <i class="fas fa-paw green lg-paw mt-3 mb-2"></i>
        <h2>
          Helping To Find Their
          <br />
          Furever Homes{" "}
        </h2>
      </div>
      <Carousel />
    </Fragment>
  );
};

export default HomeScreen;
