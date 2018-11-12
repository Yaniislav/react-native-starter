import { StyleSheet, Platform } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.inputBorderColor,
    borderRadius: scale(4),
    paddingVertical: verticalScale(10),
    height: scale(45),
    paddingLeft: scale(9),
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    textAlignVertical: 'center',
    paddingBottom: 0,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
  },
  errorContainer: {
    height: verticalScale(27),
    flexDirection: 'row',
  },
  errorInput: {
    borderColor: COLORS.error,
  },
});

export default styles;
