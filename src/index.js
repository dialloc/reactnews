import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from './redux/store.js'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App dispatch={store.dispatch}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
