import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { removeRocketReservation } from "../../redux/rockets/rockets";

function RocketProfile() {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;

    const removeRocketReservation = () => {
        dispatch(removeRocketReservation(id));
    };
  return (  );
}

export default RocketProfile;