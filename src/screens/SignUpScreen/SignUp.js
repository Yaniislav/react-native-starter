import React, { useRef } from 'react';
import { View, Keyboard } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthFormInput';
import DefaultButton from '../../components/DefaultButton';

import validate from '../../validators/auth-validator';
import styles from './styles';

const SignUp = ({ handleSubmit }) => {
  const submit = (data) => {
    Keyboard.dismiss();
    handleSubmit(data);
  };

  const passwordRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <View>
      <KeyboardAvoidingWrapper>
        <View style={styles.paddingContainer} >
          <Field
            component={FormInput}
            placeholder={'FIRST NAME'}
            name='firstName'
            returnKeyType='next'
            onSubmitEditing={() => lastNameRef.current.focus()}
            maxLength={20}
          />
          <Field
            component={FormInput}
            placeholder={'LAST NAME'}
            name='lastName'
            returnKeyType='next'
            onSubmitEditing={() => emailRef.current.focus()}
            inputRef={lastNameRef}
            maxLength={20}
          />
          <Field
            component={FormInput}
            placeholder={'EMAIL'}
            name='email'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
            inputRef={emailRef}
            keyboardType='email-address'
            maxLength={40}
          />
          <Field
            component={FormInput}
            placeholder={'PASSWORD'}
            containerStyle={styles.lastInput}
            name='password'
            autoCapitalize ='none'
            returnKeyType='done'
            inputRef={passwordRef}
            secureTextEntry
            onSubmitEditing={submit}
            maxLength={20}
          />
          <DefaultButton
            title={'Sign Up'}
            onPress={submit}
          />
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({ form: 'signup', validate })(SignUp);
