import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FormInput from '../../components/AuthFormInput';
import DefaultButton from '../../components/DefaultButton';
import DefaultText from '../../components/DefaultText';

import validate from '../../validators/auth-validator';
import styles from './styles';

@reduxForm({ form: 'signin', validate })
export default class SignIn extends Component {
  static propTypes = {
    onGoToSignUpPress: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  handleSubmit = (data) => {
    Keyboard.dismiss();
    this.props.handleSubmit(data);
  }

  renderTitle = () => (
    <DefaultText
      large
      center
      style={styles.title}
    >
      Sign In
    </DefaultText>
  );

  render() {
    const {
      onGoToSignUpPress,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingWrapper>
          { this.renderTitle() }
          <Field
            component={FormInput}
            placeholder={'EMAIL'}
            name='email'
            autoCapitalize='none'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordRef.focus()}
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
            inputRef={(ref) => { this.passwordRef = ref; }}
            secureTextEntry
            onSubmitEditing={this.handleSubmit}
            maxLength={20}
          />
          <DefaultButton
            title={'Sign  in'}
            onPress={this.handleSubmit}
          />
        </KeyboardAvoidingWrapper>
      </View>
    );
  }
}
