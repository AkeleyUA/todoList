import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const style = {
  div: {
    maxWidth: 1440,
    margin: '0 auto',
    textAlign: 'center',
    padding: '30px 0',
  },
  button: {
    background: grey[50],
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
  },
};

const ErrorIdTask = ({ match }) => (
  <>
    <Alert severity="error" style={{ margin: 30 }}>
      {`A task with id: ${match.params.id} does not exist.`}
    </Alert>
    <div style={style.div}>
      <Button
        style={style.button}
        size="large"
        type="button"
        color="primary"
        component={NavLink}
        to="/"
      >
        Home
      </Button>
    </div>
  </>
);

ErrorIdTask.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ErrorIdTask;
