import React, { Fragment } from "react";
import "./Carousel.css";
import Carousel1 from "../../assets/carousel1.jpg";
import Carousel2 from "../../assets/carousel2.jpg";
import Carousel3 from "../../assets/carousel3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide my-4 carousel-fade container-fluid"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner pb-5">
        <div class="carousel-item active">
          <img src={Carousel1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Carousel2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Carousel3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
