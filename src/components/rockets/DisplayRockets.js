import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  addRocketReservation,
  removeRocketReservation,
} from '../../Redux/rockets/rocket';

function DisplayRockets(props) {
  const dispatch = useDispatch();
  const {
    id, name, image, rocketDescription, reserved,
  } = props;
  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <>
      <ul className="rocket-container">
        <li className="rocket">
          <img src={image} alt="rocket" />
          <div className="rocket-details">
            <h2>{name}</h2>
            <p>
              {reserved && <span>Reserved</span>}
              {`${rocketDescription}`}
            </p>
            {reserved ? (
              <button
                type="button"
                className="remove-reservation"
                onClick={handleRemoveReserveClick}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                className="add-reservation"
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
