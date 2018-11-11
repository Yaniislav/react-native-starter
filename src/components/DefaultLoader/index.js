import React from 'react';
import { ActivityIndicator } from 'react-native';

import COLORS from '../../constants/colors';

const DefaultLoader = props => (
  <ActivityIndicator
    size='large'
    color={COLORS.primaryColor}
    {...props}
  />
);


export default DefaultLoader;
