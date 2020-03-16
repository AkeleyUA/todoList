import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import routeComponents from './routes/index';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routeComponents}
      </BrowserRouter>
      {/* <BrowserRouter>
        <Route path="/todoList" component={NestedRoute} />
        <Route path="/task/:id" component={TaskInfoPage} />
      </BrowserRouter> */}
    </Provider>
  );
}

export default App;
