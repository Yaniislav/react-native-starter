import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import { signInAction } from '../../redux/actions';

const LoginScreen = ({ signIn, navigation }) => (
  <SignIn
    onSubmit={signIn}
    onGoToSignUpPress={() => navigation.replace('SignUpScreen')}
  />
);

LoginScreen.propTypes = {
  navigation: PropTypes.object,
  signIn: PropTypes.func,
};

export default connect(null, ({
  signIn: signInAction,
}))(LoginScreen);
