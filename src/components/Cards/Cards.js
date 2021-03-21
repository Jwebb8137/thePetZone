import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [fill, setFill] = useState("far");
  const setFillLike = () => {
    fill === "far" ? setFill("fa") : setFill("far");
  };
  return (
    <div className="card my-3 mx-2 pt-0">
      <i
        class={`${fill} fa-heart card-favorited`}
        aria-hidden="true"
        onClick={setFillLike}
      ></i>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{props.name}</strong>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn bg-grn w-75">
          More Info <i className="fa fa-caret-right" aria-hidden="true"></i>
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default Card;
