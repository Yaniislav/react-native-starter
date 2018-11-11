import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';
import { addListener } from '../redux';

@connect(state => ({ nav: state.nav }), null)
class RootNavigator extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

RootNavigator.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

export default RootNavigator;
