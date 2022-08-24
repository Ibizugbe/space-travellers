const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
const apiURL = 'https://api.spacexdata.com/v3/rockets';

// store
const initialState = [];

// actions
export const addRocketReservation = (id) => ({
  type: ADD_RESERVATION,
  payload: {
    id,
  },
});

export const removeRocketReservation = (id) => ({
  type: REMOVE_RESERVATION,
  payload: {
    id,
  },
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
      const myRocketList = rocketList.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        rocketDescription: rocket.description,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        reservation: false,
      }));
      if (myRocketList) {
        dispatch(getRockets(myRocketList));
      }
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;

        return { ...rocket, reservation: true };
      });
      return [...newState];
    }
    case REMOVE_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;

        return { ...rocket, reservation: false };
      });

      return [...newState];
    }
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
