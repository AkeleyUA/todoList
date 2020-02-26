import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/reducer';
import Timer from './components/timer/timer';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Timer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
