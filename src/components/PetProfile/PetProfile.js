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
  return (
    <Fragment>
      <div className="container p-0">
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
            <img id="pet-profile-img" src={PetProfileImg} className="" />
          </div>
        </div>
        <div className="row pt-5 px-2 mb-0 d-flex justify-content-center">
          <div className="col-12 mt-3">
            <h2 className="mb-1">Cheetoh</h2>
            <p className="px-3 mb-3">
              This adorable young man is 12 weeks old and looking for somewhere
              to call home!
            </p>
          </div>
          <div className="col-5 p-0">
            <button className="btn btn-success btn-profile">
              <i class="fas fa-phone-volume"></i> 919-536-1234
            </button>
          </div>
          <div className="col-5 p-0">
            <button className="btn btn-success btn-profile">
              <i class="fas fa-laptop"></i> Virtual Visit
            </button>
          </div>
        </div>
        <div className="scrolling-wrapper my-3">
          <img src={SliderImg1} className="slider-img col-4 w-75 mx-2" />
          <img src={SliderImg2} className="slider-img col-4 w-75 mx-2" />
          <img src={SliderImg3} className="slider-img col-4 w-75 mx-2" />
          <img src={SliderImg4} className="slider-img col-4 w-75 mx-2" />
          <img src={SliderImg5} className="slider-img col-4 w-75 mx-2" />
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
