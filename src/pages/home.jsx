import React from 'react';
import { Button, Grid, Input, Container, Box, Tabs, Tab } from '@material-ui/core';
import { cyan, grey, blue, red } from '@material-ui/core/colors';
import { Route, NavLink } from 'react-router-dom';

const HomePage = (props) => {
  const {
    error,
    varificationInput,
    tabValue,
    timerBtnValue,
    inputRef,
    timeToString,
    addInterval,
    removeInterval,
    tabMainLog,
    tabMainChart,
    timer,
  } = props;

  return (
    <div style={{ height: 1000 }}>
      <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{
            maxWidth: 1440,
            margin: '0 auto',
          }}
        >
          <Container maxWidth={false} className="task-init">
            <Input
              id="standard-basic"
              style={{
                width: "300px",
                margin: "0 auto",
                display: "flex",
              }}
              error={error}
              inputProps={{
                ref: inputRef,
                className: "input-task-name",
                style: {
                  color:(error ? red[500] : blue[900]),
                  textAlign: 'center',
                },
              }}
              fullWidth={true}
              placeholder="Name of your task"
              onChange={varificationInput}
            />
            <Box className="circle" color="primary.main" fontWeight="500" fontSize={20}>
              <p className="time">{timeToString(timer)}</p>
            </Box>
            <Button
              variant="text"
              color="primary"
              type="button"
              onClick={timerBtnValue === 'start' ? addInterval : removeInterval}
              style={{
                margin: '0 auto 30px auto',
                display: 'flex',
                boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
              }}
            >
              {timerBtnValue}
            </Button>
          </Container>
          <Tabs style={{ width: '100%', background: cyan[700] }} variant="fullWidth" value={tabValue}>
            <Tab style={{ color: grey[50] }} label={`Tasks log`} component={NavLink} to="/todoList/" />
            <Tab style={{ color: grey[50] }} label={`Tasks chart`} component={NavLink} to="/todoList/tasks-chart" />
          </Tabs>
          <Route exact path="/todoList/" component={tabMainLog} />
          <Route path="/todoList/tasks-chart" component={tabMainChart} />
        </Grid>
      </div>
  );
};

export default HomePage;
