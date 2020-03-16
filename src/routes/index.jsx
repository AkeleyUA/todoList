import React from 'react';
import { Route } from 'react-router-dom';
import Timer from '../components/timer/timerRootComponent';
import TabMainLog from '../components/tabMainLog';
import TabMainCharts from '../components/tabMainCharts/tabMainCharts';
import TaskInfoPage from '../pages/index';

const NestedRouteInTimer = () => {
  const routes = [{
    path: '/todoList',
    component: TabMainLog,
  }, {
    path: '/todoList/tasks-chart',
    component: TabMainCharts,
  }];
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Timer>
      {routeComponents}
    </Timer>
  );
};

const routes = [{
  path: '/todoList',
  component: NestedRouteInTimer,
}, {
  path: '/task/:id',
  component: TaskInfoPage,
}];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={path} component={component} key={key} />
));

export default routeComponents;
