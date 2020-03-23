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

import timeToString from '../components/timer/timeToStringHelper';
import { deleteTaskAction } from '../reducers/tasksManager/actions';

const style = {
  buttonDelete: { background: grey[50], borderRadius: 0 },
  table: {
    maxWidth: 1440,
    margin: '0 auto',
  },
  tableRow: { background: blue[100] },
  tableBody: { color: blue[900] },
  div: {
    width: '100%',
    textAlign: 'center',
    padding: '30px 0',
  },
  buttonHome: {
    background: grey[50],
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
  },
};

const TaskInfo = ({ deleteTask, tasks, match }) => {
  const neededTask = tasks.find((task) => task.id === +match.params.id);
  return (
    <>
      <Table
        className="tasks-log"
        style={style.table}
      >
        <TableHead>
          <TableRow>
            <TableCell variant="body">ID</TableCell>
            <TableCell variant="body">Task</TableCell>
            <TableCell variant="body">Time start</TableCell>
            <TableCell variant="body">Time end</TableCell>
            <TableCell variant="body">Time spend</TableCell>
            <TableCell variant="body">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={style.tableBody}>
          <TableRow id={neededTask.id} style={style.tableRow}>
            <TableCell variant="head"><div>{neededTask.id}</div></TableCell>
            <TableCell variant="head"><div>{neededTask.name}</div></TableCell>
            <TableCell variant="head">
              <div>
                {new Date(neededTask.start).toLocaleTimeString()}
              </div>
            </TableCell>
            <TableCell variant="head">
              <div>
                {new Date(neededTask.end).toLocaleTimeString()}
              </div>
            </TableCell>
            <TableCell variant="head"><div>{timeToString(neededTask.spend)}</div></TableCell>
            <TableCell variant="head">
              <Button
                style={style.buttonDelete}
                type="button"
                component={NavLink}
                onClick={() => {
                  deleteTask(neededTask.id);
                }}
                to="/log"
                color="primary"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div
        style={style.div}
      >
        <Button
          style={style.buttonHome}
          size="large"
          type="button"
          color="primary"
          component={NavLink}
          to="/log"
        >
          Home
        </Button>
      </div>
    </>
  );
};

TaskInfo.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispathToProps = (dispatch) => ({
  deleteTask: bindActionCreators(deleteTaskAction, dispatch),
});

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
});

export default connect(mapStateToProps, mapDispathToProps)(TaskInfo);
