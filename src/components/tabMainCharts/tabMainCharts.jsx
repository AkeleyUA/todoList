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
import { changeTabActiveAction } from '../../reducers/UI/action';

import randomTasks from './CreateRandomTasksHelper';
import chartsArray from './CreateChartBarHelper';

const tabMainCharts = ({
  putTasks,
  tasks,
  changeTabActive,
  tabValue,
}) => {
  const data = chartsArray(24, tasks);
  if (tabValue !== 1) {
    changeTabActive(1);
  }
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
          const tasksArray = randomTasks();
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
  changeTabActive: PropTypes.func.isRequired,
  tabValue: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
  tabValue: state.UI.tabValue,
});

const mapDispathToProps = (dispatch) => ({
  putTasks: bindActionCreators(putTasksAction, dispatch),
  changeTabActive: bindActionCreators(changeTabActiveAction, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(tabMainCharts);
