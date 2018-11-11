import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import KeyboardAvoidingWrapper from '../../components/UI/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthenticationForm/FormInput';
import DefaultButton from '../../components/UI/DefaultButton';
import styles from './styles';

import validate from '../../validators/auth-validator';

@reduxForm({ form: 'signup', validate })
class SignUp extends Component {
  static propTypes = {
    onGoToLoginPress: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  handleSubmit = (data) => {
    Keyboard.dismiss();
    this.props.handleSubmit(data);
  }

  render() {
    const { onGoToLoginPress } = this.props;

    return (
      <View>
        <KeyboardAvoidingWrapper>
          <View style={styles.paddingContainer} >
            <Field
              component={FormInput}
              placeholder={'FIRST NAME'}
              name='firstName'
              returnKeyType='next'
              onSubmitEditing={() => this.lastNameRef.focus()}
              maxLength={20}
            />
            <Field
              component={FormInput}
              placeholder={'LAST NAME'}
              name='lastName'
              returnKeyType='next'
              onSubmitEditing={() => this.emailRef.focus()}
              inputRef={(ref) => { this.lastNameRef = ref; }}
              maxLength={20}
            />
            <Field
              component={FormInput}
              placeholder={'EMAIL'}
              name='email'
              autoCapitalize='none'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordRef.focus()}
              inputRef={(ref) => { this.emailRef = ref; }}
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
              inputRef={(ref) => { this.passwordRef = ref; }}
              secureTextEntry
              onSubmitEditing={this.handleSubmit}
              maxLength={20}
            />
            <DefaultButton
              title={'Sign Up'}
              onPress={this.handleSubmit}
            />
          </View>
        </KeyboardAvoidingWrapper>
      </View>
    );
  }
}

export default SignUp;
