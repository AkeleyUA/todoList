import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import store from './store/index';
import routeComponents from './routes/index';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routeComponents}
          <Redirect exact from="/" to="/log" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
