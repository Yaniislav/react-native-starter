import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testAuthAction } from '../redux/actions';

@connect(null, ({
  testAuth: testAuthAction,
}))
class Root extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    testAuth: PropTypes.func,
  };

  componentDidMount() {
    this.props.testAuth();
  }

  render() {
    return null;
  }
}

export default Root;
