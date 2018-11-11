import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Root from '../screens/Root';

const appNavigator = createStackNavigator({
  Root: {
    screen: Root,
  },
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

export default appNavigator;
