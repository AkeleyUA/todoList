import React from 'react';
import { Button } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const tabMainCharts = (props) => {
  const { data, tasksGenerator } = props;
  return (
    <>
      <ResponsiveContainer height={430}>
        <BarChart
          data={data}
          margin={{
            top: 50,
            right: 20,
            bottom: 50,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" domain={[0, 24]} />
          <YAxis domain={[0, 60]} />
          <Legend />
          <Bar name="Minuts in this hours" dataKey="duration" fill={blue[900]} width={30} />
        </BarChart>
      </ResponsiveContainer>
      <Button style={{ position: 'fixed', bottom: 50, right: 50 }} variant="contained" onClick={tasksGenerator}>generate</Button>
    </>
  );
};

export default tabMainCharts;
