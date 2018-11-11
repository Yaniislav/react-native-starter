import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import { signInAction } from '../../redux/actions';

@connect(null, ({
  signIn: signInAction,
}))
class LoginScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    signIn: PropTypes.func,
  };

  render() {
    const {
      navigation,
      signIn,
    } = this.props;
    return (
      <SignIn
        onSubmit={signIn}
        onGoToSignUpPress={() => navigation.replace('SignUpScreen')}
      />
    );
  }
}

export default LoginScreen;
