import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bootstrapper from './bootstrapper';
import {Provider} from "mobx-react";
import 'basscss/css/basscss.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert/dist/sweetalert.css'

const injectables = bootstrapper()

ReactDOM.render(
        <Provider {...injectables}>
            <App/>
        </Provider>
   , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
