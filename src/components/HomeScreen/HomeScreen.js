import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import ContextComponent from "../ContextComponent/ContextComponent";
import ButtonSlider from "../Buttons/ButtonSlider";
import Carousel from "../Carousel/Carousel";
import MainVid from "../../assets/main-bg.mp4";
import CatImg from "../../assets/home-cat.jpg";
import DogImg from "../../assets/home-dog.jpg";
import CardSlider from "../../components/Cards/CardSlider";
import HomeSliderImg1 from "../../assets/home-slider-cat-1.jpg";
import Spinner from "../Spinner/Spinner";
import HomeSliderImg2 from "../../assets/home-slider-cat-2.jpg";
import HomeSliderImg3 from "../../assets/home-slider-cat-3.jpg";
import HomeSliderImg4 from "../../assets/home-slider-cat-4.jpg";
import HomeSliderImg5 from "../../assets/home-slider-cat-5.jpg";
import HomeSliderImg6 from "../../assets/home-slider-dog-1.jpg";
import HomeSliderImg7 from "../../assets/home-slider-dog-4.jpg";
import HomeSliderImg8 from "../../assets/home-slider-dog-3.jpg";
import HomeSliderImg9 from "../../assets/home-slider-dog-1.jpg";
import HomeSliderImg10 from "../../assets/home-slider-dog-4.jpg";
import "./HomeScreen.css";

export default class HomeScreen extends Component {
  componentDidMount() {
    document.querySelector("body").scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="min-100-vw container fade-in pb-5 px-0 m-0 green">
          <i class="fas fa-paw green display-paw mt-3 mb-2 w-view"></i>
          <div className="fade-in-1 w-view">
            <h3 className="display-heading mb-0">Ready To Find</h3>
            <h3 className="sub-heading mb-3">That Special Someone?</h3>
            <button id="display-search" class="btn submit shadow w-75">
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
          <div className="container">
            <div className="row">
              <div className="col-12">
                <i class="fas fa-paw lg-paw bg-grn-grad mt-4 mb-3"></i>
                <h2 className="text-dark">
                  Helping To Find Their
                  <br />
                  Furever Homes{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 px-4">
            <img src={CatImg} className="w-75 r-50 lrg-img shadow" />
            <h2 className="mt-4 mb-0">
              Meet Patches <i class="fas fa-heart bg-grn-grad"></i>
            </h2>
            <p className="home-p px-1 mt-1 mb-0">
              One of many loving cats who deserve a loving home!
            </p>
          </div>
          <h2 className="mb-0 mt-5">Look At These Cats!</h2>
          <div className="scrolling-wrapper home-scrolling-wrapper px-4 col-12">
            <CardSlider
              img={HomeSliderImg1}
              name={"Kilo and Peel"}
              location={"Raleigh, NC"}
            />
            <CardSlider
              img={HomeSliderImg2}
              name={"Obie"}
              location={"Raleigh, NC"}
            />
            <CardSlider
              img={HomeSliderImg3}
              name={"Patches"}
              location={"Raleigh, NC"}
            />
            <CardSlider
              img={HomeSliderImg4}
              name={"Fiona"}
              location={"Raleigh, NC"}
            />
            <CardSlider
              img={HomeSliderImg5}
              name={"Desmond"}
              location={"Raleigh, NC"}
            />
            <div className="d-flex flex-column slider-right-end">
              <i class="fas fa-arrow-right"></i>
              <span>View All</span>
            </div>
          </div>
          <div className="col-12 mt-3">
            <ButtonSlider
              title="Search Cats"
              color="#fff"
              border="2px solid #0000004f"
            />
          </div>
          <div className="col-12 px-4 my-5">
            <img src={DogImg} className="w-75 r-50 shadow lrg-img" />
            <h2 className="mt-4 mb-0">
              Meet Chester! <i class="fas fa-heart bg-grn-grad"></i>
            </h2>
            <p className="home-p px-2 mt-1 mb-0">
              One of many loving dogs who deserve a loving home!
            </p>
          </div>
        </div>
        <h2 className="mb-0 mt-1">Look At These Dogs!</h2>
        <div className="scrolling-wrapper home-scrolling-wrapper px-4 col-12 mb-2">
          <CardSlider
            img={HomeSliderImg6}
            name={"Buster"}
            location={"Raleigh, NC"}
          />
          <CardSlider
            img={HomeSliderImg7}
            name={"Nicolas"}
            location={"Raleigh, NC"}
          />
          <CardSlider
            img={HomeSliderImg8}
            name={"Zeus"}
            location={"Raleigh, NC"}
          />
          <CardSlider
            img={HomeSliderImg9}
            name={"Rufus"}
            location={"Raleigh, NC"}
          />
          <CardSlider
            img={HomeSliderImg10}
            name={"Desmond"}
            location={"Raleigh, NC"}
          />
          <div className="d-flex flex-column slider-right-end">
            <i class="fas fa-arrow-right"></i>
            <span>View All</span>
          </div>
        </div>
        <div className="col-12 mb-5">
          <ButtonSlider
            title="Search Dogs"
            color="#fff"
            border="2px solid #0000004f"
          />
        </div>
        <h2 className="m-0">
          They Deserve Our Love <i class="fas fa-heart bg-grn-grad"></i>
        </h2>
        <Carousel />
        <h2 className="mb-5">
          Let's Give All We Can <i class="fas fa-paw bg-grn-grad"></i>
        </h2>
      </Fragment>
    );
  }
}
