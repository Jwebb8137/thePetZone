import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import "./PetProfile.css";
import ProfileVid from "../../assets/profile-vid.mp4";
import PetProfileImg from "../../assets/pet-profile.jpg";
import SliderImg1 from "../../assets/pet-slider-5.jpg";
import SliderImg2 from "../../assets/pet-slider-4.jpg";
import SliderImg3 from "../../assets/pet-slider-3.jpg";
import SliderImg4 from "../../assets/pet-slider-2.jpg";
import SliderImg5 from "../../assets/pet-slider-1.jpg";

const PetProfile = () => {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div id="pet-profile-container" className="container p-0">
        <div className="row">
          <div className="col-12 container p-0">
            <video
              id="pet-profile-cover"
              className="video-full"
              autoPlay
              muted
              loop
            >
              <source src={ProfileVid} type="video/mp4" />
              <source src={ProfileVid} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <i id="cover-upload-icon" class="fas fa-camera"></i>
            <img id="pet-profile-img" src={PetProfileImg} className="shadow" />
          </div>
        </div>
        <div
          id="profile-heading"
          className="row mb-0 d-flex justify-content-center"
        >
          <div className="col-12 mt-3">
            <h2 className="mb-0">Cheetoh</h2>
            <p className="px-1 mb-3">
              This adorable young man is 12 weeks old and looking for somewhere
              to call home!
            </p>
          </div>
          <div className="col-12 p-0 d-flex justify-content-center col-gap-1">
            <button className="btn btn-success d-flex flex-column bg-dark-grad btn-profile m-2 mt-0">
              <i class="fas fa-phone-volume"></i>
              <span className="helper-text">Call</span>
            </button>
            <Link
              to="/Chat/ChatRoom"
              className="btn btn-profile d-flex flex-column bg-back-grn m-2 mt-0"
            >
              <i class="fas fa-laptop"></i>
              <span className="helper-text">Visit</span>
            </Link>
          </div>
        </div>
        <div className="scrolling-wrapper my-3">
          <img src={SliderImg1} className="slider-img shadow col-4 w-75 mx-3" />
          <img src={SliderImg2} className="slider-img shadow col-4 w-75 mx-3" />
          <img src={SliderImg3} className="slider-img shadow col-4 w-75 mx-3" />
          <img src={SliderImg4} className="slider-img shadow col-4 w-75 mx-3" />
          <img src={SliderImg5} className="slider-img shadow col-4 w-75 mx-3" />
        </div>
        <div className="col-12 mt-0">
          <h2 className="mb-1">* Available *</h2>
          <p className="px-3 mb-3">
            Please call or text the number provided to talk to us more about
            Cheetoh!
          </p>
        </div>
        <Map />
      </div>
    </Fragment>
  );
};

export default PetProfile;
