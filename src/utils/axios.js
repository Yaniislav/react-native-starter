import axios from 'axios';
import { REFRESH_ACCESS_TOKEN_ENDPOINT } from '../constants/endpoints';
import { accessTokenUpdatedAction, signOutAction } from '../redux/actions';

const API_URL = 'YOUR_SERVER_ADDRESS';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

let store = null;

axiosInstance.setStore = (providedStore) => {
  store = providedStore;
};

function checkForTokenError(error, onErrorCallback, paramToCheck) {
  if (error.response) {
    const errorIsFound = error.response.data.find(e => e.param === paramToCheck);

    if (errorIsFound) {
      return onErrorCallback(error);
    }

    throw error;
  } else if (error.request) {
    throw createSimpleErrorObject('Server does not respond');
  }

  throw createSimpleErrorObject('Please, check your internet connection');
}

export const refreshTokenSelector = state => state.auth.refreshToken;

function onRefreshTokenError() {
  const { dispatch } = store;


  dispatch(signOutAction());
}

async function refreshAccessToken() {
  try {
    const state = store.getState();
    const refreshToken = refreshTokenSelector(state);
    const response = await axiosInstance.post(REFRESH_ACCESS_TOKEN_ENDPOINT, { refreshToken });
    const { dispatch } = store;

    dispatch(accessTokenUpdatedAction(response.data));
    setAuthHeader(response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    return checkForTokenError(error, onRefreshTokenError, 'refreshToken');
  }
}

axiosInstance.interceptors.response.use(null, async (error) => {
  if (error.response && error.response.data.find(e => e.param === 'accessToken')) {
    try {
      const newToken = await refreshAccessToken();

      error.config.headers.Authorization = `Bearer ${newToken}`;

      return axiosInstance.request(error.config);
    } catch (err) {
      onRefreshTokenError();
      throw err;
    }
  }

  throw error;
});

export const setAuthHeader = (accessToken) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const resetAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export const getFormErrors = (error) => {
  const formErrors = {};

  error.response.data.forEach(({ param, message }) => { formErrors[param] = message; });

  return formErrors;
};

export const createSimpleErrorObject = (error) => {
  return {
    response: {
      data: {
        _error: error,
      },
    },
  };
};

export default axiosInstance;
