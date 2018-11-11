import { createReducer } from 'redux-act';
import { userSignedIn, userSignedOut } from '../actions';

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const authReducer = createReducer({
  [userSignedIn]: (state, payload) => ({
    accessToken: payload.accessToken || state.accessToken,
    refreshToken: payload.refreshToken || state.refreshToken,
  }),
  [userSignedOut]: () => ({
    ...initialState,
  }),
}, initialState);

export default authReducer;
