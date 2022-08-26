import React from 'react';
import { PropTypes } from 'prop-types';

function RocketProfile(props) {
  const { id, name } = props;
  return (
    <tr className="reserved-rocket" id={id}>
      <td>{name}</td>
    </tr>
  );
}

RocketProfile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RocketProfile;
