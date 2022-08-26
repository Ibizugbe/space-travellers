import React from 'react';
import { useSelector } from 'react-redux';
import DisplayMission from '../missions/DisplayMissions';
import 'bootstrap/dist/css/bootstrap.css';

const Mission = () => {
  const missions = useSelector((state) => state.mission);
  return (
    <div className="container-fluid px-5">
      <table className="table table-hover table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Missions</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <DisplayMission
              name={mission.name}
              key={mission.id}
              id={mission.id}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
