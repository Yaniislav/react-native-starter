import { useContext } from 'react';
import { ApiContext } from './apiProvider';

export default () => {
  const api = useContext(ApiContext);

  return api;
};
