import React from 'react'
import { Alert } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { grey} from '@material-ui/core/colors';

export const ErrorIdTask = (props) => {
  const { paramsId } = props;
  return (
    <>
      <Alert severity="error" style={{margin: 30}}>
        A task with id:{paramsId} does not exist.
      </Alert>
      <div style={{maxWidth: 1440, margin: '0 auto', textAlign:"center", padding: "30px 0"}}>
        <Button 
          style={{
            background: grey[50],
            boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
          }}
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
  )
}