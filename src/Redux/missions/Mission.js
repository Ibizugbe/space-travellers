const JOIN_MISSION = 'space-travelers/mission/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/mission/LEAVE_MISSION';
const FETCH_MISSION = 'space-travelers/mission/FETCH_MISSION';
const urlLink = 'https://api.spacexdata.com/v3/missions';

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const fetchMission = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

export const fetchMissionsAPI = () => async (dispatch) => {
  const res = await fetch(urlLink);
  const mission = await res.json();
  const missionList = mission.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  dispatch(fetchMission(missionList));
};

// reducer
const missionReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const updateState = state.map((mission) => {
        if (mission.id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...updateState];
    }

    case LEAVE_MISSION: {
      const updateState = state.map((mission) => {
        if (mission.id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...updateState];
    }
    case FETCH_MISSION:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionReducer;
