import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import EditHouse from "../components/EditHouse";
import HouseDetails from "../components/HouseDetails";
import "../styleSheet/DetailsPage.css";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const DetailsPage = ({ warehouses, editHouse }) => {
  const [house, setHouse] = useState({});
  const navigate = useNavigate();

  const { houseName } = useParams();
  const existedHouse = warehouses.find((house) => house.name === houseName);

  const handleInput = (e) => {
    existedHouse[e.target.name] = e.target.value;
    setHouse(existedHouse);
  };

  const handleSubmit = (e) => {
    if (e.target.property.value) {
      existedHouse[e.target.property.value] = e.target.value.value;
      setHouse(existedHouse);
    }

    editHouse(house);
    navigate(`/details/${house.name}`);

    e.preventDefault();
  };

  return (
    <div>
      <TopBar />
      {existedHouse && (
        <div>
          {" "}
          <EditHouse
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            house={existedHouse}
          ></EditHouse>
          <HouseDetails house={existedHouse}></HouseDetails>
        </div>
      )}

      {!existedHouse && <h1>Name didn't matches</h1>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    warehouses: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editHouse: (house) => {
      dispatch({ type: "EDIT_HOUSE", house: house });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
