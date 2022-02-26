import React, { useEffect } from "react";
import "../styleSheet/HouseDetails.css";

const HouseDetails = ({ house }) => {
  const { name, image } = house;

  return (
    <div className="houseDetails_container">
      {house && (
        <div>
          <div>
            <h3>{name}</h3>
          </div>
          <div className="houseDetails">
            <img src={image} alt="" />
            <div className="houseDetails_info">
              {Object.keys(house).map((key) => {
                return (
                  <p>
                    {key} :<span className="data"> {house[key]}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseDetails;
