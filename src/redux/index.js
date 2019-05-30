import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { navigationMiddleware } from '../navigation';

import reducer from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['nav', 'form'],
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, navigationMiddleware));

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };

export default store;
