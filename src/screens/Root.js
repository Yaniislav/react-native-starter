import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testAuthAction } from '../redux/actions';

const Root = ({ testAuth }) => {
  useEffect(() => {
    testAuth();
  }, []);

  return null;
};

Root.navigationOptions = {
  header: null,
};

Root.propTypes = {
  testAuth: PropTypes.func,
};

export default connect(null, ({
  testAuth: testAuthAction,
}))(Root);
