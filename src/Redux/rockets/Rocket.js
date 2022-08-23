const ADD_RESERVATION = "space-travelers/rockets/ADD_ROCKET_RESERVATION";
const REMOVE_RESERVATION = "space-travelers/rockets/REMOVE__ROCKET_RESERVATION";
const GET_ROCKETS = "space-travelers/rockets/GET_ROCKETS";
const apiURL = "https://api.spacexdata.com/v3/rockets";

// store
const initialState = [];

// actions
export const addRocketReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const removeRocketReservation = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});
