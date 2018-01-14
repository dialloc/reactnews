import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import {Provider} from 'react-redux';
import {store,history} from './redux/store.js'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <App dispatch={store.dispatch}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
