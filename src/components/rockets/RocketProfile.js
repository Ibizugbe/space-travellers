import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { removeRocketReservation } from "../../redux/rockets/rockets";

function RocketProfile() {
  const dispatch = useDispatch();
  const { id, name } = props;

  const removeRocketReservation = () => {
    dispatch(removeRocketReservation(id));
  };
  return (
    <li className="reserved-rocket" id={id}>
      <h3>{name}</h3>
    </li>
  );
}

RocketProfile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RocketProfile;
