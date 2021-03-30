import React from "react";

const ButtonSlider = (props) => {
  return (
    <button
      class="btn submit btn-alt w-75"
      style={{
        background: props.bgColor,
        border: props.border,
        color: props.color,
      }}
    >
      {props.title} <i class="fas fa-arrow-circle-right ml-3"></i>
    </button>
  );
};

export default ButtonSlider;
