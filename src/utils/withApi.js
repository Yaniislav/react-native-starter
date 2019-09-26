import React from 'react';
import PropTypes from 'prop-types';
import { ApiContext } from './apiProvider';


export const withApi = (Component) => {
  const WithApi = props => (
    <ApiContext.Consumer>
      {api => <Component {...props} api={api} />}
    </ApiContext.Consumer>
  );

  return WithApi;
};

export const ApiType = PropTypes.shape({
  get: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired,
  put: PropTypes.func.isRequired,
});
