import React from 'react';
import { PropTypes } from 'prop-types';

function MissionProfile(props) {
  const { id, name } = props;
  return (
    <tr className="reserved-rocket" id={id}>
      <td>{name}</td>
    </tr>
  );
}

MissionProfile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionProfile;
