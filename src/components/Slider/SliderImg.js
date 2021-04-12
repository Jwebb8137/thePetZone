import React from "react";

const SliderImg = (props) => {
  return (
    <img
      src={props.img}
      onClick={(e) => props.enlargeChange(e.target.src)}
      className={`slider-img shadow col-4 w-75 mx-3 ${props.enlarge}`}
    />
  );
};

export default SliderImg;
