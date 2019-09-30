import React, { useRef } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthFormInput';
import DefaultButton from '../../components/DefaultButton';
import styles from './styles';

const SignUp = ({ handleSubmit, values, ...props }) => {
  const passwordRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingWrapper>
        <View style={styles.paddingContainer}>
          <FormInput
            name="firstName"
            autoFocus
            placeholder='FIRST NAME'
            returnKeyType='next'
            onSubmitEditing={() => lastNameRef.current.focus()}
            maxLength={20}
            value={values.firstName}
            {...props}
          />
          <FormInput
            placeholder='LAST NAME'
            name='lastName'
            returnKeyType='next'
            onSubmitEditing={() => emailRef.current.focus()}
            inputRef={lastNameRef}
            maxLength={20}
            value={values.lastName}
            {...props}
          />
          <FormInput
            placeholder='EMAIL'
            name='email'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
            inputRef={emailRef}
            keyboardType='email-address'
            maxLength={40}
            value={values.email}
            {...props}
          />
          <FormInput
            placeholder='PASSWORD'
            containerStyle={styles.lastInput}
            name='password'
            autoCapitalize ='none'
            returnKeyType='done'
            inputRef={passwordRef}
            secureTextEntry
            onSubmitEditing={handleSubmit}
            maxLength={20}
            value={values.password}
            {...props}
          />
          <DefaultButton
            title={'Sign Up'}
            onPress={handleSubmit}
          />
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default SignUp;
