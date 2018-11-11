import { put as sagaPut, call, select } from 'redux-saga/effects';
import api, { setAuthHeader, resetAuthHeader } from '../../utils/axios';
import { REFRESH_ACCESS_TOKEN_ENPOINT } from '../../constants/endpoints';
import * as actions from '../actions';

const getRefreshToken = state => state.auth.refreshToken;

export function* get(endpoint, options) {
  try {
    return yield call(api.get, endpoint, options || {});
  } catch (error) {
    return yield call(checkForTokenError, error, retryRequest, 'accessToken');
  }
}

export function* post(endpoint, data, options) {
  try {
    return yield call(api.post, endpoint, data, options || {});
  } catch (error) {
    return yield call(checkForTokenError, error, retryRequest, 'accessToken');
  }
}

export function* put(endpoint, data, options) {
  try {
    return yield call(api.put, endpoint, data, options || {});
  } catch (error) {
    return yield call(checkForTokenError, error, retryRequest, 'accessToken');
  }
}

function* retryRequest(error) {
  const newToken = yield call(refreshAccessToken);
  const newError = { ...error };
  newError.config.headers.Authorization = `Bearer ${newToken}`;
  return yield call(api.request, newError.config);
}

function* checkForTokenError(error, onAccessTokeErrorCallback, paramToCheck) {
  if (error.response) {
    const accessTokenError = error.response.data.find(e => e.param === paramToCheck);
    if (accessTokenError) {
      return yield call(onAccessTokeErrorCallback, error);
    }

    throw error;
  } else if (error.request) {
    throw createSimpleErrorObject('Server does not respond');
  }

  throw createSimpleErrorObject('Please, check your internet connection');
}

function* refreshAccessToken() {
  try {
    const refreshToken = yield select(getRefreshToken);
    const response = yield call(api.post, REFRESH_ACCESS_TOKEN_ENPOINT, { refreshToken });
    setAuthHeader(response.data.accessToken);
    yield sagaPut(actions.accessTokenUpdatedAction(response.data));
    return response.data.accessToken;
  } catch (error) {
    return yield call(checkForTokenError, error, onRefreshTokenError, 'refreshToken');
  }
}

function* onRefreshTokenError(error) {
  yield sagaPut(actions.signOutAction());
  throw error;
}

function createSimpleErrorObject(error) {
  return {
    response: {
      data: {
        _error: error,
      },
    },
  };
}

export { resetAuthHeader, setAuthHeader };
