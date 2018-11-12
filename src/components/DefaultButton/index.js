import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import DefaultText from '../DefaultText';
import styles from './styles';

const DefaultButton = ({
  outline,
  onPress,
  title,
  containerStyle,
  slimContures,
  rounded,
  disabled,
  ...rest
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <View
      {...rest}
      style={[
        styles.containerStyle,
        containerStyle,
        outline ? styles.outline : null,
        slimContures ? styles.slimContures : null,
        rounded ? styles.rounded : null,
        disabled ? styles.disabledButton : null,
      ]}
    >
      <DefaultText
        light
        center
        primary={outline}
        gray={disabled}
        style={[
          styles.title,
          slimContures ? styles.slimTitle : null,
        ]}
      >
        {title}
      </DefaultText>
    </View>
  </TouchableOpacity>
);

DefaultButton.propTypes = {
  outline: PropTypes.any,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  containerStyle: PropTypes.any,
  slimContures: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default DefaultButton;
