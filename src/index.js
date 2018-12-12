import React from 'react';
import {render} from 'react-dom';
//import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import './base.css'

render(
	<Provider store={store}>
	<HashRouter>
	<App />
	</HashRouter>
	</Provider>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();