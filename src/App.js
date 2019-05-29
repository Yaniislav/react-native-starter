import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

// import store, { persistor } from './redux';
import RootNavigator from './navigation';


export default class App extends Component {
  render() {
    return (
      // <Provider store={store} >
      //   <PersistGate
      //     persistor={persistor}
      //     loading={null}
      //   >
          <RootNavigator />
      //   </PersistGate>
      // </Provider>
    );
  }
}
