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
    <div class="card card-slider shadow-card col-4 w-75">
      {renewBtn}
      {deleteBtn}
      <img src={props.img} className="slider-img" />
      <div className="card-title pt-1 px-2 row m-0 d-flex justify-content-space">
        <div className="col-3 px-0">
          <i class="fas fa-bone"></i>
        </div>
        <div className="col-6 px-0">
          <h3 className="m-0">{props.name}</h3>
        </div>
        <div className="col-3 px-0">
          <i class="fas fa-dog"></i>
        </div>
      </div>
      <p className="mb-1">{props.location}</p>
      <div className="card-footer">2 days ago</div>
      {editBtn}
    </div>
  );
};

export default CardSlider;
