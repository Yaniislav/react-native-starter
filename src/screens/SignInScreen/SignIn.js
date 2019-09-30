import React, { useRef } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthFormInput';
import DefaultButton from '../../components/DefaultButton';
import DefaultText from '../../components/DefaultText';
import styles from './styles';

const SignIn = ({ handleSubmit, values, ...props }) => {
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
        <FormInput
          placeholder='EMAIL'
          name='email'
          autoCapitalize='none'
          returnKeyType='next'
          onSubmitEditing={() => passwordRef.current.focus()}
          keyboardType='email-address'
          maxLength={40}
          value={values.email}
          {...props}
        />
        <FormInput
          placeholder='PASSWORD'
          containerStyle={styles.lastInput}
          name='password'
          autoCapitalize='none'
          returnKeyType='done'
          inputRef={passwordRef}
          secureTextEntry
          onSubmitEditing={handleSubmit}
          maxLength={20}
          value={values.password}
          {...props}
        />
        <DefaultButton
          title={'Sign  in'}
          onPress={handleSubmit}
        />
      </KeyboardAvoidingWrapper>
    </View>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default SignIn;
