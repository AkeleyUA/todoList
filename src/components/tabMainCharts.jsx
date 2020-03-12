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

const randomTasks = () => {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);
  let newTasksArray = [];
  let randomStart = new Date().getTime() - 43200000;
  for (let i = 0; i < random(10, 15); i++) {
    const randomSpend = random(600000, 5400000);
    const randomEnd = randomStart + randomSpend;
    newTasksArray = [...newTasksArray, {
      id: randomStart,
      start: randomStart,
      end: randomEnd,
      spend: randomSpend,
      isCompleted: true,
      hour: new Date(randomStart).getHours(),
      name: `random task №${i + 1}`,
    }];
    randomStart = randomEnd + random(0, 600000);
  }
  return newTasksArray;
};

const tabMainCharts = (props) => {
  const { data, putTasks } = props;
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
      <Button
        style={{
          position: 'fixed',
          bottom: 50,
          right: 50,
        }}
        variant="contained"
        onClick={() => {
          let tasksArray = randomTasks();
          putTasks(tasksArray);
        }}
      >
        generate
      </Button>
    </>
  );
};

export default tabMainCharts;
