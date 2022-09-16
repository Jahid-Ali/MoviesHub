import React, { useState } from "react";
import "../App.css";
import Popup from "./Popup";

const MovieCard = ({ items }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopup = () => {
    setShowPopUp(false);
  };

  const showPopup = () => {
    setShowPopUp(true);
  };

  return (
    <div className="movie">
      <img className="movie__img" src={items["Poster"]} alt="movieimg" />
      <p className="movie__name">{items.Title}</p>
      <p className="details" onClick={showPopup}>
        More Details
      </p>

      <Popup
        visible={showPopUp}
        onClose={closePopup}
        imgSrc={items.Poster}
        title={items.Title}
        year={items.Year}
        type={items.Type}
      />
    </div>
  );
};

export default MovieCard;
