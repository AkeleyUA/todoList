import React from 'react';
import { Alert } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const ErrorIdTask = ({ match }) => {
  return (
    <>
      <Alert severity="error" style={{ margin: 30 }}>
        A task with id: {match.params.id} does not exist.
      </Alert>
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
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

export default ErrorIdTask;
