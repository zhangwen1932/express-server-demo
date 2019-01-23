import { combineReducers } from 'redux';

export const actionTypes = {
  ADMIN_URL_LOCATION: 'ADMIN_URL_LOCATION',
};

const initialState = {
  url: '/',
};

export const actions = {
  changeLocationAdmin: url => ({
    type: actionTypes.ADMIN_URL_LOCATION,
    data: url,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADMIN_URL_LOCATION:
      return {
        ...state, url: action.data,
      };
    default:
      return state;
  }
}

const admin = combineReducers({
  adminGlobalState: reducer,
});

export default admin;
