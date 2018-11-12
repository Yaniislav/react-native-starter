import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

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
