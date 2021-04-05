import React from "react";
import { Link } from "react-router-dom";
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
    <Link to="/PetProfile/Cat" className="card-link m-0">
      <div class="card card-slider text-dark shadow-card col-4 w-75">
        {renewBtn}
        {deleteBtn}
        <img src={props.img} className="slider-img" />
        <div className="card-title pt-1 px-1 row m-0 d-flex justify-content-space">
          <div className="col-2 px-0">
            <i class="fas fa-bone bg-grn-grad"></i>
          </div>
          <div className="col-8 px-0">
            <h3 className="m-0 p-0">{props.name}</h3>
          </div>
          <div className="col-2 px-0">
            <i class="fas fa-dog bg-grn-grad"></i>
          </div>
        </div>
        <p className="mb-1">{props.location}</p>
        <div className="card-footer">2 days ago</div>
        {editBtn}
      </div>
    </Link>
  );
};

export default CardSlider;
