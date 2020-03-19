import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

import { putTasksAction } from '../../reducers/tasksManager/actions';
import randomTasks from './CreateRandomTasksHelper';
import chartsArray from './CreateChartBarHelper';

const style = {
  button: {
    position: 'fixed',
    bottom: 50,
    right: 50,
  },
  margin: {
    top: 50,
    right: 20,
    bottom: 50,
    left: 20,
  },
};

const tasksArray = randomTasks();

const tabMainCharts = ({
  putTasks,
  tasks,
}) => {
  const data = chartsArray(24, tasks);
  return (
    <>
      <ResponsiveContainer height={430}>
        <BarChart
          data={data}
          margin={style.margin}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" domain={[0, 24]} />
          <YAxis domain={[0, 60]} />
          <Legend />
          <Bar name="Minuts in this hours" dataKey="duration" fill={blue[900]} width={30} />
        </BarChart>
      </ResponsiveContainer>
      <Button
        style={style.button}
        variant="contained"
        onClick={() => {
          putTasks(tasksArray);
        }}
      >
        generate
      </Button>
    </>
  );
};

tabMainCharts.propTypes = {
  putTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  putTasks: bindActionCreators(putTasksAction, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(tabMainCharts);
