import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Root from '../screens/Root';

const appNavigator = createStackNavigator({
  Root: {
    screen: Root,
  },
  SignIn: {
    screen: SignInScreen,
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
