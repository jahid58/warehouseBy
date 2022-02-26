import React from "react";
import "../styleSheet/EditHouse.css";
const EditHouse = ({ handleInput, handleSubmit, house }) => {
  return (
    <div>
      {house && (
        <div className="editHouse">
          <div>
            <h3> Edit House Details </h3>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="editHouse_form">
              <div className="editHouse_form_inputs">
                <div className="common">
                  <label htmlFor="name">Name :</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={house.name}
                    onMouseLeave={(e) => handleInput(e)}
                  />
                </div>
                <div className="common">
                  <label htmlFor="city">City :</label>
                  <input
                    type="text"
                    name="city"
                    defaultValue={house.city}
                    onMouseLeave={(e) => handleInput(e)}
                  />
                </div>
                <div className="common">
                  <label htmlFor="cluster">Cluster :</label>
                  <input
                    type="text"
                    name="cluster"
                    defaultValue={house.cluster}
                    onMouseLeave={(e) => handleInput(e)}
                  />
                </div>
                <div className="common">
                  <label htmlFor="space_available">Space limit :</label>
                  <input
                    type="number"
                    name="space_available"
                    defaultValue={house.space_available}
                    onMouseLeave={(e) => handleInput(e)}
                  />
                </div>
                <div className="common">
                  <label htmlFor="is_live">Live status :</label>
                  <input
                    type="boolean"
                    name="is_live"
                    defaultValue={house.is_live}
                    onMouseLeave={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="newProperty">
                <p> Add new details of this house</p>
                <div className="newProperty_inputs">
                  <label htmlFor="property">Property name : </label>
                  <input type="text" name="property" />

                  <label htmlFor="value">Property value : </label>
                  <input type="text" name="value" />
                </div>
              </div>
              <input type="submit" value="Make Changes" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditHouse;
