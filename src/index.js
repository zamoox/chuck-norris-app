import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/service-context';
import ChuckNorrisService from './services/chuckNorrisService';
import App from './components/app';


ReactDOM.render(
  <React.StrictMode>
    <Provider value={new ChuckNorrisService()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
