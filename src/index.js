import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import store from './store';
import { initPubSub } from './iframePubSub';;

initPubSub();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
