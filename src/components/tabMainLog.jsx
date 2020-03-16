import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { grey, blue } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

import { deleteTaskAction } from '../reducers/tasksManager/actions';
import { changeTabActiveAction } from '../reducers/UI/action';

import timeToString from './timer/timeToStringHelper';

const TabMainLog = ({
  tasks,
  deleteTask,
  changeTabActive,
  tabValue,
}) => {
  const shouldRenderTasks = tasks.filter((task) => task.isCompleted);
  if (tabValue !== 0) {
    changeTabActive(0);
  }
  return (
    <div
      className="tabs-main"
      style={{
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <Table className="tasks-log">
        <TableHead>
          <TableRow>
            <TableCell variant="body">№</TableCell>
            <TableCell variant="body">Task</TableCell>
            <TableCell variant="body">Time start</TableCell>
            <TableCell variant="body">Time end</TableCell>
            <TableCell variant="body">Time spend</TableCell>
            <TableCell variant="body">Info</TableCell>
            <TableCell variant="body">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ color: blue[900] }}>
          {shouldRenderTasks.map((task, index) => (
            <TableRow id={task.id} key={task.id} style={{ background: blue[100] }}>
              <TableCell variant="head"><div>{index + 1}</div></TableCell>
              <TableCell variant="head"><div>{task.name}</div></TableCell>
              <TableCell variant="head">
                <div>
                  {new Date(task.start).toLocaleTimeString()}
                </div>
              </TableCell>
              <TableCell variant="head">
                <div>
                  {new Date(task.end).toLocaleTimeString()}
                </div>
              </TableCell>
              <TableCell variant="head"><div>{timeToString(task.spend)}</div></TableCell>
              <TableCell variant="head">
                <Button
                  style={{
                    background: grey[50],
                    borderRadius: 0,
                  }}
                  type="button"
                  color="primary"
                  component={NavLink}
                  to={`/task/${task.id}`}
                >
                  Info
                </Button>
              </TableCell>
              <TableCell variant="head">
                <Button
                  style={{ background: grey[50], borderRadius: 0 }}
                  type="button"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                  color="primary"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TabMainLog.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeTabActive: PropTypes.func.isRequired,
  tabValue: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
  tabValue: state.UI.tabValue,
});

const mapDispathToProps = (dispatch) => ({
  deleteTask: bindActionCreators(deleteTaskAction, dispatch),
  changeTabActive: bindActionCreators(changeTabActiveAction, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(TabMainLog);
