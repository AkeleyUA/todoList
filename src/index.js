import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import mongoose from 'mongoose';

// mongoose.connect("mongodb://localhost:3000/state-db");

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
