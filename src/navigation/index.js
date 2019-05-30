import { connect } from 'react-redux';
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import AppNavigator from './AppNavigator';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

export { navigationMiddleware };

const RootNavigator = createReduxContainer(AppNavigator);

export default connect(state => ({
  state: state.nav,
}))(RootNavigator);
