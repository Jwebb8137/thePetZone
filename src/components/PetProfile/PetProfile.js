import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import "./PetProfile.css";
import ProfileVid from "../../assets/profile-vid.mp4";
import PetProfileImg from "../../assets/pet-profile.jpg";
import ImageModal from "../Modals/ImageModal";
import SliderImg from "../Slider/SliderImg";
import SliderImg1 from "../../assets/pet-slider-5.jpg";
import SliderImg2 from "../../assets/pet-slider-4.jpg";
import SliderImg3 from "../../assets/pet-slider-3.jpg";
import SliderImg4 from "../../assets/pet-slider-2.jpg";
import SliderImg5 from "../../assets/pet-slider-1.jpg";

const PetProfile = () => {
  const [enlargeImg, setEnlargeImg] = useState("");
  const [fullImg, setFullImg] = useState("");
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const enlargeImgHandler = (e) => {
    setFullScreen(true);
    setEnlargeImg("enlarge-img");
  };

  const closeImg = (e) => {
    setFullScreen(false);
    setEnlargeImg("");
  };

  const enlargeImgChange = (e) => {
    console.log(e);
    setFullImg(e);
    setFullScreen(true);
  };

  const fullScreenBg = (
    <div id="pop-container" className="shadow" onClick={closeImg}>
      <img src={fullImg} className="enlarge-img" />
      <button
        id="img-close"
        className="shadow"
        type="button"
        onClick={closeImg}
        aria-label="Close"
      >
        <i class="fas fa-times m-0"></i>
      </button>
    </div>
  );

  return (
    <Fragment>
      {!fullScreen ? null : fullScreenBg}
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
            <a href="tel:+491570156">
              <button className="btn btn-success d-flex flex-column bg-dark-grad btn-profile m-2 mt-0">
                <i class="fas fa-phone-volume m-0"></i>
              </button>
            </a>
            <Link
              to="/Chat/Video"
              className="btn btn-profile d-flex bg-back-grn m-2 mt-0"
            >
              <i class="fas fa-laptop m-0"></i>
            </Link>
          </div>
        </div>
        <div className="scrolling-wrapper my-3">
          <SliderImg
            img={SliderImg1}
            enlarge={enlargeImg}
            enlargeChange={enlargeImgChange}
          />
          <SliderImg
            img={SliderImg2}
            enlarge={enlargeImg}
            enlargeChange={enlargeImgChange}
          />{" "}
          <SliderImg
            img={SliderImg3}
            enlarge={enlargeImg}
            enlargeChange={enlargeImgChange}
          />{" "}
          <SliderImg
            img={SliderImg4}
            enlarge={enlargeImg}
            enlargeChange={enlargeImgChange}
          />{" "}
          <SliderImg
            img={SliderImg5}
            enlarge={enlargeImg}
            enlargeChange={enlargeImgChange}
          />
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
