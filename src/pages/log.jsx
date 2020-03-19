import React from 'react';
import Timer from '../components/timer/timerRootComponent';
import TabMainLog from '../components/tabMainLog';

const LogPage = () => (
  <Timer tabValue={0}>
    <TabMainLog />
  </Timer>
);

export default LogPage;
