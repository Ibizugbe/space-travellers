import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import {
  addRocketReservation,
  removeRocketReservation,
} from "../../Redux/rockets/rocket";

function DisplayRockets(props) {
  const dispatch = useDispatch();
  const { id, name, image, description, reserved } = props;
  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <>
      <div className="container"></div>
    </>
  );
}

export default DisplayRockets;
