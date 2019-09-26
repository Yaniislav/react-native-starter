import { call } from 'redux-saga/effects';
import api, { setAuthHeader, resetAuthHeader } from '../../utils/axios';

export function* get(endpoint, options) {
  try {
    return yield call(api.get, endpoint, options || {});
  } catch (error) {
    throw error;
  }
}

export function* post(endpoint, data, options) {
  try {
    return yield call(api.post, endpoint, data, options || {});
  } catch (error) {
    throw error;
  }
}

export function* put(endpoint, data, options) {
  try {
    return yield call(api.put, endpoint, data, options || {});
  } catch (error) {
    throw error;
  }
}

export { resetAuthHeader, setAuthHeader };
