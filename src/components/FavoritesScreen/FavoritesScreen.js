import React, { Fragment } from "react";
import SearchForm from "../SearchForm/SearchForm";
import CardFeatured from "../Cards/CardFeatured";
import Card from "../Cards/Card";
import "./FavoritesScreen.css";
import Img1 from "../../assets/card1.jpg";
import Img2 from "../../assets/card2.jpg";
import Img3 from "../../assets/card3.jpg";

const FavoritesScreen = () => {
  return (
    <Fragment>
      <div className="favorite-container w-100 fade-in container p-0 bg-light-grn pt-2">
        {/* <i class="fas fa-paw w-100 lg-icon mt-3"></i>
        <h2 className="mt-1 mb-0">
          <span>Ready to bring home a </span>
          Furever Friend?
        </h2> */}
        <div className="card-group">
          <Card img={Img1} name="Sasha" />
          <Card img={Img2} name="Marvin" />
          <Card img={Img3} name="Bates and Oscar" />
        </div>
      </div>
    </Fragment>
  );
};

export default FavoritesScreen;
