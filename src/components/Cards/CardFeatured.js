import React from "react";

const CardFeatured = (props) => {
  return (
    <div className="card text-center featured-card my-3 mx-2">
      <div className="card-header pt-3 px-0">
        <i class="fa fa-star" aria-hidden="true"></i>
        <u>Featured Pet</u>
        <i class="fa fa-star" aria-hidden="true"></i>
      </div>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Meet {props.name}!</h5>
        <p className="card-text">
          This beautiful young lady is looking for her furever home! Read more
          and schedule a visit!
        </p>
        <a href="#" className="btn bg-grn w-75">
          View Profile <i className="fa fa-caret-right" aria-hidden="true"></i>
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default CardFeatured;
