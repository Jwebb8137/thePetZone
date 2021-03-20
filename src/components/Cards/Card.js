import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card my-3 mx-2">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn bg-grn w-75">
          More Info <i className="fa fa-caret-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
