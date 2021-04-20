import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

let composeEnhancers = compose;

if (__DEV__) {
  (composeEnhancers as any) = composeWithDevTools({
    realtime: true,
    port: 8000,
    hostname: 'localhost',
  });
}

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
