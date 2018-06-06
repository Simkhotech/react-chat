/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import { createStore, applyMiddleware, compose } from 'redux';

import middlewares from './middlewares';
import rootReducer from '../reducers';

export default function cofigureStore() {
  if (process.env.NODE_ENV === 'production') {
    return createStore(applyMiddleware(...middlewares));
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // For Hot Module Replacement
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
}
