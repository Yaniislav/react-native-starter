import React, { useRef } from 'react';
import { View, Keyboard } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthFormInput';
import DefaultButton from '../../components/DefaultButton';
import DefaultText from '../../components/DefaultText';

import validate from '../../validators/auth-validator';
import styles from './styles';

const SignIn = ({ handleSubmit }) => {
  const submit = (data) => {
    Keyboard.dismiss();
    handleSubmit(data);
  };

  const renderTitle = () => (
    <DefaultText
      large
      center
      style={styles.title}
    >
      Sign In
    </DefaultText>
  );

  const passwordRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingWrapper>
        { renderTitle() }
        <Field
          component={FormInput}
          placeholder={'EMAIL'}
          name='email'
          autoCapitalize='none'
          returnKeyType='next'
          onSubmitEditing={() => passwordRef.current.focus()}
          keyboardType='email-address'
          maxLength={40}
        />
        <Field
          component={FormInput}
          placeholder={'PASSWORD'}
          containerStyle={styles.lastInput}
          name='password'
          autoCapitalize='none'
          returnKeyType='done'
          inputRef={passwordRef}
          secureTextEntry
          onSubmitEditing={submit}
          maxLength={20}
        />
        <DefaultButton
          title={'Sign  in'}
          onPress={submit}
        />
      </KeyboardAvoidingWrapper>
    </View>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({ form: 'signin', validate })(SignIn);
