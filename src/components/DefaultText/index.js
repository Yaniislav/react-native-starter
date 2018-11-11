import React from 'react';
import { Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

import getAndroidFont from '../../utils/font-utils';
import styles from './styles';

const isAndroid = Platform.OS === 'android';

const DefaultText = ({
  style,
  small,
  medium,
  large,
  center,
  children,
  ...rest
}) => (
  <Text
    {...rest}
    style={[
      styles.text,
      style,
      isAndroid ? getAndroidFont(style, hanzipen) : null,
      small ? styles.small : null,
      medium ? styles.medium : null,
      large ? styles.large : null,
      center ? styles.center : null,
    ]}
  >
    { children }
  </Text>
);

DefaultText.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any,
  medium: PropTypes.any,
  large: PropTypes.any,
  center: PropTypes.any,
  small: PropTypes.any,
};

export default DefaultText;
