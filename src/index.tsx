import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './global.scss';
import './index.css';
import store from './redux/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBillWave, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { history } from './components/history/index';

// add icon to libary
library.add(faMoneyBillWave, faCoffee);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router history={history}>
                    <App />
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Router>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
