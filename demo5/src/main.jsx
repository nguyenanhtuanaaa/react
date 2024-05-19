import React from 'react';
import { createRoot } from 'react-dom'; // Update import
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render( // Change ReactDOM.createRoot to createRoot
  <Provider store={store}>
    <App />
  </Provider>
);
