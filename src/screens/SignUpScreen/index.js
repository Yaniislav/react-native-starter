import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUp from './SignUp';
import { signUpAction } from '../../redux/actions';

const SignUpScreen = ({ navigation, signUp }) => (
  <SignUp
    onGoToLoginPress={() => navigation.replace('LoginScreen')}
    onSubmit={signUp}
  />
);

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
  signUp: PropTypes.func,
};

export default connect(null, ({
  signUp: signUpAction,
}))(SignUpScreen);
