import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store/store.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';
import { saveState } from './state/store/localStorage.jsx';
import './assets/css/index.css';

store.subscribe(() => {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
