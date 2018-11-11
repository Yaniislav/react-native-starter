import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  paddingContainer: {
    flex: 2.5,
    alignItems: 'center',
    paddingHorizontal: scale(30),
    paddingBottom: scale(25),
    justifyContent: 'center',
  },
  lastInput: {
    marginBottom: scale(5),
  },
  errorContainer: {
    height: scale(25),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
