import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import Timer from './components/timer';
// import reducer from './reducers/index';
import tasksManager from './reducers/tasksManager';
import wievUI from './reducers/wievUI';

const MyApplyMiddleware = (store) => (next) => (action) => {
  // не работает с redux-devtools
  const result = next(action);
  console.log('new state: ', store.getState());

  return result;
};

const initialReducers = {
  tasksManager,
  wievUI,
};

const myRootReducer = (state, action, reducers = initialReducers) => {
  const newState = {};
  const reducersFuncs = Object.values(reducers);
  const redusersKey = Object.keys(reducers);
  reducersFuncs.forEach((r, i) => {
    const localState = (state === undefined ? state : state[redusersKey[i]]);
    newState[r.name] = r(localState, action);
  });
  return newState;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  myRootReducer,
  composeEnhancer(applyMiddleware(MyApplyMiddleware)),
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
