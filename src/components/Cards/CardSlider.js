import React from "react";
import "./CardSlider.css";

const CardSlider = (props) => {
  return (
    <div class="card card-slider col-4 w-75">
      <img src={props.img} className="slider-img" />
      <h3 className="card-title pt-2 px-3 m-0 d-flex justify-content-between">
        <i class="fas fa-paw"></i> {props.name} <i class="fas fa-paw"></i>
      </h3>
      <p className="mb-2">{props.location}</p>
    </div>
  );
};

export default CardSlider;
