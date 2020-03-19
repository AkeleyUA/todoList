import React from 'react';
import { Route } from 'react-router-dom';
import TaskInfoPage from '../pages/index';
import LogPage from '../pages/log';
import ChartPage from '../pages/charts';

const routes = [{
  name: 'log',
  path: '/log',
  component: LogPage,
}, {
  name: 'info',
  path: '/tasks/:id',
  component: TaskInfoPage,
}, {
  name: 'chart',
  path: '/chart',
  component: ChartPage,
}];

const routeComponents = routes.map(({ path, component, name }) => (
  <Route path={path} component={component} key={name} />
));

export default routeComponents;
