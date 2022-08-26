import React from "react";
import { useSelector } from "react-redux";
import DisplayMission from "../missions/DisplayMissions";
import "bootstrap/dist/css/bootstrap.css";

const Mission = () => {
  const missions = useSelector((state) => state.mission);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
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
  );
};

export default Mission;
