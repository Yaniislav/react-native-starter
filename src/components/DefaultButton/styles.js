import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.primaryColor,
    height: verticalScale(48),
    width: scale(230),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: COLORS.primaryColor,
    borderWidth: scale(3),
  },
  title: {
    fontWeight: '500',
  },
  slimContures: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  slimTitle: {
    fontWeight: '100',
  },
  rounded: {
    borderRadius: scale(18),
  },
  disabledButton: {
    borderColor: COLORS.gray,
  },
  disabledTitle: {
    color: COLORS.gray,
  },
});

export default styles;
