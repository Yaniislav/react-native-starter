import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';

import FormProvider from './FormProvider';
import SignIn from './SignIn';
import { signInAction } from '../../redux/actions';

const LoginScreen = ({ signIn, navigation }) => {
  const handleSubmit = (data) => {
    Keyboard.dismiss();
    signIn(data);
  };

  return (
    <FormProvider onSubmit={handleSubmit}>
      {props => (
          <SignIn
            onGoToSignUpPress={() => navigation.replace('SignUpScreen')}
            {...props}
          />
      )}
    </FormProvider>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
  signIn: PropTypes.func,
};

export default connect(null, ({
  signIn: signInAction,
}))(LoginScreen);
