import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Timer from './components/timer';
import reducer from './reducers/index';

const MyApplyMiddleWare = (store) => (next) => (action) => {
  // не работает с react-devtools
  console.log('coll action: ', action);
  const result = next(action);
  console.log('new state: ', store.getState());
  return result;
};

export const store = createStore(
  reducer,
  applyMiddleware(MyApplyMiddleWare),
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
