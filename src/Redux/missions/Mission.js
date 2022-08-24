// actions type
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const JOIN_MISSION = 'space-travelers/mission/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/mission/LEAVE_MISSION';
const FETCH_MISSION = 'space-travelers/mission/FETCH_MISSION';
const urlLink = 'https://api.spacexdata.com/v3/missions';

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const fetchMission = (id) => ({
  type: FETCH_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const MissionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state.action.id];

    case LEAVE_MISSION:
      return state.filter((book) => book.id !== action.payload);

    case FETCH_MISSION:
      return [...action.id];

    default:
      return state;
  }
};

export const fetchMissionsAPI = () => async (dispatch) => {
  const res =await fetch(urlLink);
  const mission = await res.json();
    const missionList = mission.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
         
  }));
  dispatch(fetchMission(missionList)); 
};

fetchMissionsAPI();

export default MissionReducer;
