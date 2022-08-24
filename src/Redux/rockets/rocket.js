const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
const apiURL = 'https://api.spacexdata.com/v3/rockets';

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

// fetch api

export const fetchRocketsAPI = () => async (dispatch) => {
  await fetch(`${apiURL}`)
    .then((response) => response.json())
    .then((rocketList) => {
      const arrangedList = rocketList.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        reservation: false,
      }));
      if (arrangedList) {
        dispatch(getRockets(arrangedList));
      }
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case REMOVE_RESERVATION:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
