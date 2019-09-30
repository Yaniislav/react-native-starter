import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DefaultInput from '../DefaultInput';
import DefaultText from '../DefaultText';

import styles from './styles';

const FormInput = (props) => {
  const {
    containerStyle,
    inputContainerStyle,
    inlineImage,
    name,
    handleChange,
    handleBlur,
    errors,
    touched,
    value,
    ...inputProps
  } = props;

  const hasError = touched[name] && errors[name];

  const renderError = () => {
    if (hasError) {
      return <DefaultText>{errors[name]}</DefaultText>;
    }
    return null;
  };


  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          (hasError) ? styles.errorInput : null,
        ]}
      >
        <DefaultInput
          style={styles.input}
          {...inputProps}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          value={inputProps.value}
          />
      </View>
      <View style={styles.errorContainer}>
        {renderError()}
      </View>
    </View>
  );
};

FormInput.propTypes = {
  ...DefaultInput.propTypes,
  input: PropTypes.object,
  containerStyle: PropTypes.any,
  inlineImage: PropTypes.any,
  inputContainerStyle: PropTypes.any,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object,
  value: DefaultInput.propTypes.value,
};

export default FormInput;
