import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./redux/configureStore";
import { Provider as MoviesProvider} from 'react-redux';

const  store = configureStore();

ReactDom.render(
    <MoviesProvider store={ store }>
        <Router>
        <App />
        </Router>
    </MoviesProvider>,
    document.getElementById('root')

);

