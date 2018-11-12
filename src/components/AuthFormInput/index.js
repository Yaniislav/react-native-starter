import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DefaultInput from '../DefaultInput';
import DefaultText from '../DefaultText';

import styles from './styles';

const FormInput = (props) => {
  const {
    input,
    containerStyle,
    inputContainerStyle,
    meta: { error, touched },
    inlineImage,
    ...inputProps
  } = props;

  const renderError = () => {
    if (touched && error) {
      return <DefaultText>{error}</DefaultText>;
    }
    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          (error && touched) ? styles.errorInput : null,
        ]}
      >
        <DefaultInput
          style={styles.input}
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          />
      </View>
      <View style={styles.errorContainer}>
        {
          renderError()
        }
      </View>
    </View>
  );
};

FormInput.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.any,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any,
  }),
  inlineImage: PropTypes.any,
  inputContainerStyle: PropTypes.any,
};

export default FormInput;
