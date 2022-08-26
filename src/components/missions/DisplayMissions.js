import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { joinMission, leaveMission } from '../../Redux/missions/mission';

const DisplayMission = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td>
        {reserved ? <span>Active Member</span> : <span>Not A Member</span>}
      </td>
      <td>
        {reserved ? (
          <button type="button" onClick={handleLeaveMission}>
            Leave Mission
          </button>
        ) : (
          <button type="button" onClick={handleJoinMission}>
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

export default DisplayMission;

DisplayMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
