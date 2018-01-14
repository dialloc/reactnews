import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer  from './reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancers(
    applyMiddleware(logger,thunk,routerMiddleware(history))
  )
);

export { store , history };
