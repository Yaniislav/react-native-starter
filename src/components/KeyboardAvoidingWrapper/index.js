import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';

KeyboardAvoidingWrapper.propTypes = {
  children: PropTypes.any,
};

const KeyboardAvoidingWrapper = ({ children, ...rest }) => (
  <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1 }}
    resetScrollToCoords={{ x: 0, y: 0 }}
    keyboardShouldPersistTaps={'handled'}
    {...rest}
  >
    {children}
  </KeyboardAwareScrollView>
);

export default KeyboardAvoidingWrapper;
