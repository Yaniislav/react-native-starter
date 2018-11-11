import { createAction } from 'redux-act';

export const signUpAction = createAction('SIGN_UP');

export const signInAction = createAction('SIGN_IN');

export const userSignedIn = createAction('USER_SIGNED_IN');

export const userSignedUp = createAction('USER_SIGNED_UP');

export const signOutAction = createAction('SIGN_OUT');

export const userSignedOut = createAction('USER_SIGNED_OUT');

export const initHeaderAction = createAction('INIT_HEADER');

export const accessTokenUpdatedAction = createAction('ACCESS_TOKEN_UPDATED');

export const testAuthAction = createAction('TEST_AUTH');
