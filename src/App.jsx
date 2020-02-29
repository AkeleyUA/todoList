import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Timer from './components/timer';
import reducer from './reducers/index';

export const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
