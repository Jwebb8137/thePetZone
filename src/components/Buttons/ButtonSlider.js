import React from "react";
import "./ButtonSlider.css";

const ButtonSlider = (props) => {
  return (
    <button
      id="button-slider"
      class="btn submit btn-alt bg-dark-grad shadow w-75"
      style={{
        border: "none",
        color: props.color,
      }}
    >
      {props.title} <i class="fas fa-arrow-circle-right bg-grn-grad"></i>
    </button>
  );
};

export default ButtonSlider;
