import React from 'react';
import 'antd/dist/antd'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'

ReactDOM.render(<Provider store={store}>
    <Router />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
