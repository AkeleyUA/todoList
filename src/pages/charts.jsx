import React from 'react';
import Timer from '../components/timer/timer';
import TabMainCharts from '../components/tabMainCharts/tabMainCharts';

const ChartPage = () => (
  <Timer tabValue={1}>
    <TabMainCharts />
  </Timer>
);

export default ChartPage;
