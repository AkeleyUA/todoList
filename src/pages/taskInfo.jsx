import React from 'react';
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

const TaskInfo = (props) => {
  const { deleteTask, task, timeToString } = props;
  return (
    <>
      <Table
        className="tasks-log"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
        }}
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
        <TableBody style={{ color: blue[900] }}>
          <TableRow id={task.id} style={{ background: blue[100] }}>
            <TableCell variant="head"><div>{task.id}</div></TableCell>
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
                style={{ background: grey[50], borderRadius: 0 }}
                type="button"
                component={NavLink}
                onClick={() => {
                  deleteTask(task.id);
                }}
                to="/"
                color="primary"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '30px 0',
        }}
      >
        <Button
          style={{
            background: grey[50],
            boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
          }}
          size="large"
          type="button"
          color="primary"
          component={NavLink}
          to="/todoList/"
        >
          Home
        </Button>
      </div>
    </>
  );
};

export default TaskInfo;
