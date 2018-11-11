import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import COLORS from '../../constants/colors';

const DefaultInput = ({ inputRef, style, ...rest }) => (
    <TextInput
      blurOnSubmit={false}
      underlineColorAndroid='transparent'
      placeholderTextColor={COLORS.placeHolderColor}
      placeholderStyle={styles.fontStyle}
      {...rest}
      style={style}
      ref={inputRef}
    />
);

DefaultInput.propTypes = {
  inputRef: PropTypes.func,
  style: PropTypes.any,
};

export default DefaultInput;
