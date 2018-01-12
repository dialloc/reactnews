import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer  from './reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger,thunk)
  )
);

export { store };
