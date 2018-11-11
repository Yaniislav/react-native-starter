import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUp from './SignUp';
import { signUpAction } from '../../redux/actions';

@connect(null, ({
  signUp: signUpAction,
}))
class SignUpScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    signUp: PropTypes.func,
  };

  render() {
    const {
      navigation,
      signUp,
    } = this.props;

    return (
      <SignUp
        onGoToLoginPress={() => navigation.replace('LoginScreen')}
        onSubmit={signUp}
      />
    );
  }
}

export default SignUpScreen;
