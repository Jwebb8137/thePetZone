import React from "react";
import "./CardSlider.css";

const CardSlider = (props) => {
  const deleteBtn = props.edit ? (
    <span id="slider-delete">
      Delete <i class="far fa-trash-alt mx-1"></i>
    </span>
  ) : null;

  const editBtn = props.edit ? (
    <span id="slider-edit">
      Edit <i class="far fa-edit mx-1"></i>
    </span>
  ) : null;

  const renewBtn = props.deleted ? (
    <span id="slider-reactivate">
      Reactivate <i class="far fa-edit mx-1"></i>
    </span>
  ) : null;

  return (
    <div class="card card-slider col-4 w-75">
      {renewBtn}
      {deleteBtn}
      <img src={props.img} className="slider-img" />
      <h3 className="card-title pt-2 px-3 m-0 d-flex justify-content-between">
        <i class="fas fa-paw"></i> {props.name} <i class="fas fa-paw"></i>
      </h3>
      <p className="mb-2">{props.location}</p>
      {editBtn}
    </div>
  );
};

export default CardSlider;
