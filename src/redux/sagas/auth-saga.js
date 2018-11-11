import {
  put,
  call,
  all,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import {} from 'react-navigation';

import * as endpoints from '../../constants/endpoints';
import * as api from './api';
import * as actions from '../actions';

const getToken = state => state.auth.accessToken;

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, endpoints.SIGN_IN_ENDPOINT, payload);
    yield put(actions.userSignedIn(response.data));
    yield call(setAccessTokenToHeader);
  } catch (error) {
    yield put(actions.signInRequestFailedAction());
  }
}

function* signUp({ payload }) {
  try {
    const response = yield call(api.post, endpoints.SIGN_UP_ENDPOINT, payload);
    yield put(actions.userSignedIn(response.data));
    yield call(setAccessTokenToHeader);
  } catch (error) {
    console.log('error: ', error.response);
    yield put(actions.signUpRequestFailedAction());
  }
}

function* signOut() {
  yield put(actions.userSignedOut());
  yield call(api.resetAuthHeader);
}

function* testAuth() {
  try {
    const token = yield call(setAccessTokenToHeader);
    if (token) {
      const response = yield call(api.get, endpoints.TEST_AUTH_ENDPOINT);
      yield put(actions.userSignedIn(response.data));
    }
    
  } catch (error) {
    console.log(error.response);
    yield put(actions.testAuthRequestFailedAction());
  }
}

function* setAccessTokenToHeader() {
  const token = yield select(getToken);
  yield call(api.setAuthHeader, token);
  return token;
}

export default function* authSagas() {
  yield all([
    takeLatest(actions.signInAction, signIn),
    takeLatest(actions.signUpAction, signUp),
    takeLatest(actions.signOutAction, signOut),
    takeEvery(actions.testAuthAction, testAuth),
  ]);
}
