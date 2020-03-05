import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Timer from './components/timer';
import reducer from './reducers/index';

const MyApplyMiddleware = (store) => (next) => (action) => {
  // не работает с redux-devtools
  const result = next(action);
  console.log('action: ', result);
  console.log('new state: ', store.getState());
  return result;
};

export const store = createStore(
  reducer,
  applyMiddleware(MyApplyMiddleware),
  // // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__
  // // eslint-disable-next-line no-underscore-dangle
  // && window.__REDUX_DEVTOOLS_EXTENSION__(),
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
