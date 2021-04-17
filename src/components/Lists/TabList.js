import React, { Fragment, useState } from "react";
import CardSlider from "../Cards/CardSlider";
import BarChartVisual from "../D3/BarchartVisual";
import HomeSliderImg1 from "../../assets/home-slider-cat-1.jpg";
import PostModal from "../Modals/PostModal";
import InputModal from "../Modals/InputModal";
import "./TabList.css";

const TabList = (props) => {

  return (
    <Fragment>
      <PostModal />
      <InputModal />
      <ul
        class="nav nav-pills bg-dark-grad nav-justified mb-0 px-2 py-2"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Active
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Info
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-chart-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-chart"
            type="button"
            role="tab"
            aria-controls="pills-chart"
            aria-selected="false"
          >
            Stats
          </button>
        </li>
      </ul>
      <div class="tab-content mt-0 pb-5" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="scrolling-wrapper home-scrolling-wrapper px-4 col-12">
            <CardSlider
              img={HomeSliderImg1}
              name={"Kilo and Peel"}
              location={"Raleigh, NC"}
              edit={true}
            />{" "}
            <CardSlider
              img={HomeSliderImg1}
              name={"Kilo and Peel"}
              location={"Raleigh, NC"}
              edit={true}
            />{" "}
            <CardSlider
              img={HomeSliderImg1}
              name={"Kilo and Peel"}
              location={"Raleigh, NC"}
              edit={true}
            />{" "}
          </div>
          <button
            class="btn submit btn-outline-dark w-75 mt-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            New Post <i class="fas fa-plus-circle mx-2"></i>
          </button>
        </div>
        <div
          class="tab-pane fade"
          id="pills-chart"
          role="tabpanel"
          aria-labelledby="pills-chart-tab"
        >
          <BarChartVisual />
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <ul class="list-group pt-0 pb-5">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {`Name : ${" "} Zookeeper Joe`}
              <span
                class="badge badge-primary badge-pill"
                data-bs-toggle="modal"
                data-bs-target="#inputModal"
              >
                edit
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {`City : ${" "} Raleigh, NC`}
              <span
                class="badge badge-primary badge-pill"
                data-bs-toggle="modal"
                data-bs-target="#inputModal"
              >
                edit
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {`Age : ${" "} 28`}
              <span
                class="badge badge-primary badge-pill"
                data-bs-toggle="modal"
                data-bs-target="#inputModal"
              >
                edit
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              {`Description : ${" "} Just a normal Joe Schmo Zookeeper guy who really likes animals!`}
              <span
                class="badge badge-primary badge-pill"
                data-bs-toggle="modal"
                data-bs-target="#inputModal"
              >
                edit
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TabList;
