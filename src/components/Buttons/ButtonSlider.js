import React from "react";
import "./ButtonSlider.css";

const ButtonSlider = (props) => {
  return (
    <button
      id="button-slider"
      class="btn submit btn-alt bg-dark-grad shadow w-75"
      style={{
        border: props.border,
        color: props.color,
      }}
    >
      {props.title} <i class="fas fa-arrow-circle-right ml-3"></i>
    </button>
  );
};

export default ButtonSlider;
