import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import {
  addRocketReservation,
  removeRocketReservation,
} from "../../Redux/rockets/rocket";
import "bootstrap/dist/css/bootstrap.css";

function DisplayRockets(props) {
  const dispatch = useDispatch();
  const { id, name, image, rocketDescription, reserved } = props;
  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <>
      <ul className="container-fluid mb-4">
        <li className="rocket row">
          <img src={image} alt="rocket" className="col-lg-3 col-md-5 col-12" />
          <div className="rocket-details col-lg-9 col-md-7 col-12">
            <h2>{name}</h2>
            <p>
              {reserved && <span>Reserved</span>}
              {`${rocketDescription}`}
            </p>
            {reserved ? (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleRemoveReserveClick}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleReserveClick}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </li>
      </ul>
    </>
  );
}

DisplayRockets.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default DisplayRockets;
