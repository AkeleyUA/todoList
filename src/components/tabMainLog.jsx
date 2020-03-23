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
import timeToString from './timer/timeToStringHelper';

const style = {
  div: {
    maxWidth: 1440,
    margin: '0 auto',
  },
  tbody: { color: blue[900] },
  trow: { background: blue[100] },
  buttonInfo: {
    background: grey[50],
    borderRadius: 0,
  },
  buttonDelete: { background: grey[50], borderRadius: 0 },
};

const TabMainLog = ({
  tasks,
  deleteTask,
}) => {
  const shouldRenderTasks = tasks.filter((task) => task.isCompleted);
  return (
    <div
      className="tabs-main"
      style={style.div}
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
        <TableBody style={style.tbody}>
          {shouldRenderTasks.map((task, index) => (
            <TableRow id={task.id} key={task.id} style={style.trow}>
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
                  style={style.buttonInfo}
                  type="button"
                  color="primary"
                  component={NavLink}
                  to={`/tasks/${task.id}`}
                >
                  Info
                </Button>
              </TableCell>
              <TableCell variant="head">
                <Button
                  style={style.buttonDelete}
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
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  deleteTask: bindActionCreators(deleteTaskAction, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(TabMainLog);
