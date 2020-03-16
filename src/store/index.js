import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import tasksManager from '../reducers/tasksManager/reducer';
import UI from '../reducers/UI/reducer';
import rootSaga from '../sagas/rootSaga';

const MyLoggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log(result);
  console.log('new state: ', store.getState());
  return result;
};

const sagasMiddleware = createSagaMiddleware();


const myCombineReducers = (reducers) => {
  const myRootReducer = (state, action) => {
    const newState = {};
    const redusersEntries = Object.entries(reducers);
    redusersEntries.forEach((reducer) => {
      const localState = (state === undefined ? state : state[reducer[0]]);
      newState[reducer[0]] = reducer[1](localState, action);
    });
    return newState;
  };
  return myRootReducer;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  myCombineReducers({
    tasksManager,
    UI,
  }),
  composeEnhancer(applyMiddleware(MyLoggerMiddleware, sagasMiddleware)),
);

sagasMiddleware.run(rootSaga);

export default store;
