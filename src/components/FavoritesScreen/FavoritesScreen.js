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
      <div className="w-100 container p-0 bg-light-grn pt-2">
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
