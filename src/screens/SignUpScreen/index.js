import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import FormProvider from './FormProvider';
import SignUp from './SignUp';
import { signUpAction } from '../../redux/actions';

const SignUpScreen = ({ navigation, signUp }) => {
  const handleSubmit = (data) => {
    Keyboard.dismiss();
    signUp(data);
  };

  return (
    <FormProvider onSubmit={handleSubmit}>
      {props => (
        <SignUp
          onGoToLoginPress={() => navigation.replace('LoginScreen')}
          {...props}
        />
      )}
    </FormProvider>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
  signUp: PropTypes.func,
};

export default connect(null, ({
  signUp: signUpAction,
}))(SignUpScreen);
