import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { joinMission, leaveMission } from '../../Redux/missions/Mission';

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
      <th scope="row">{name}</th>
      <td className="col-lg-7">{description}</td>
      <td>
        {reserved ? (
          <span className="badge text-bg-primary">Active Member</span>
        ) : (
          <span className="badge text-bg-secondary">Not A Member</span>
        )}
      </td>
      <td>
        {reserved ? (
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary test-small btn-sm"
            onClick={handleJoinMission}
          >
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
