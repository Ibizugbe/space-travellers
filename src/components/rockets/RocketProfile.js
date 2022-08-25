import React from 'react';
import { PropTypes } from 'prop-types';

function RocketProfile(props) {
  const { id, name } = props;
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
