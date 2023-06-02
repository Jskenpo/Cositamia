import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.css';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
