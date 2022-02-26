import React from "react";
import { useNavigate } from "react-router-dom";
import "../styleSheet/WareHouse.css";

const WareHouse = ({ house }) => {
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/details/${house.name}`);
  };

  return (
    <div className="house" onMouseDown={() => handleClick(house.name)}>
      <div className="house_details">
        <div className="house_image">
          <img src={house.image} alt="" />
        </div>
        <div>
          <p className="house_name">{house.name}</p>
          <p>
            <span className="info_name">City: </span>
            <span className="house_info">{house.city}</span>
          </p>
          <p>
            <span className="info_name">Cluster: </span>{" "}
            <span className="house_info">{house.cluster}</span>
          </p>
          <p>
            <span className="info_name"> Space available : </span>

            <span className="house_info">{house.space_available}</span>
          </p>
          <p>
            <span className="info_name"> House type : </span>{" "}
            <span className="house_info">{house.type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
