import React from 'react';
import { PropTypes } from 'prop-types';

function MissionProfile(props) {
  const { id, name } = props;
  return (
    <li className="reserved-rocket" id={id}>
      <h3>{name}</h3>
    </li>
  );
}

MissionProfile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionProfile;
