import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store/store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.js';
import { loadState, saveState } from './state/store/localStorage.js';
import './assets/css/index.css';

store.subscribe(() => {
    saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
