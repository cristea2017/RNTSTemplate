import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

const middleware = [thunk];
let sagaMonitor;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: [''],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

// Redux
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

// Run saga middleware; Must be called after store is created
sagaMiddleware && sagaMiddleware.run(rootSaga);
console.log('saga',rootSaga);

export {store, persistor};
