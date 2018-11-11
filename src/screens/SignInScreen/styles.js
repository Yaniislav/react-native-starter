import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  paddingContainer: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: scale(30),
    paddingVertical: scale(25),
    justifyContent: 'center',
  },
  lastInput: {
    marginBottom: scale(10),
  },
  title: {
    marginBottom: verticalScale(10),
  },
  errorContainer: {
    marginBottom: verticalScale(14),
  },
  error: {
    fontSize: scale(14),
  },
});

export default styles;
