import React from 'react';
import './timer.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button,
  Grid,
  Tabs,
  Tab,
  Input,
  Container,
  Box,
} from '@material-ui/core';

import * as palette from '@material-ui/core/colors';
import MyModal from '../modal';
import timeToString from './timeToStringHelper';

import {
  startedTaskCreationAction,
  finishedTaskCreationAction,
  uploadLocalStoreAction,
  downloadLocalStoreAction,
  verificationInputAction,
} from '../../reducers/tasksManager/actions';

import {
  modalControlerAction,
  changeErrorStatusAction,
} from '../../reducers/UI/action';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: (props.tasks.length > 0 && !props.tasks[props.tasks.length - 1].isCompleted
        ? new Date().getTime() - props.tasks[props.tasks.length - 1].start
        : 0
      ),
      interval: null,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { uploadLocalStore } = this.props;
    uploadLocalStore();
  }

  componentDidUpdate() {
    const { tasks } = this.props;
    const { interval, timer } = this.state;
    const completed = (
      tasks.length > 0 && tasks[tasks.length - 1].isCompleted !== undefined
        ? tasks[tasks.length - 1].isCompleted
        : true
    );
    if (interval === null && !completed) {
      const newInterval = setInterval(() => (
        this.setState({
          timer: new Date().getTime() - tasks[tasks.length - 1].start,
        })
      ), 1000);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ interval: newInterval });
    } else if (interval !== null && completed && timer !== 0) {
      clearInterval(interval);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ timer: 0 });
    }
  }

  componentWillUnmount() {
    const { downloadLocalStore } = this.props;
    downloadLocalStore();
  }

  addInterval = () => {
    const { startedTaskCreation } = this.props;
    const dataForTheTask = {
      start: new Date().getTime(),
      hour: new Date().getHours(),
      isCompleted: false,
    };
    const interval = setInterval(() => (
      this.setState({ timer: new Date().getTime() - dataForTheTask.start })
    ), 1000);

    startedTaskCreation(dataForTheTask);
    this.setState({ interval });
  }

  removeInterval = () => {
    const { interval } = this.state;
    const {
      canAddTask,
      verificationInput,
      changeErrorStatus,
      finishedTaskCreation,
      modalControler,
    } = this.props;
    const dataForTheTask = {
      end: new Date().getTime(),
      name: this.inputRef.current.value,
      isCompleted: true,
    };

    if (canAddTask) {
      clearInterval(interval);
      finishedTaskCreation(dataForTheTask);
      changeErrorStatus(false);
      verificationInput(false);
      this.inputRef.current.value = '';
      this.setState({ timer: 0 });
    } else {
      modalControler(true);
      changeErrorStatus(true);
      verificationInput(false);
      this.inputRef.current.focus();
    }
  }

  inputErrorControler = () => {
    const {
      verificationInput,
      changeErrorStatus,
      canAddTask,
      inputError,
    } = this.props;
    const taskNameLength = this.inputRef.current.value;
    if (canAddTask && !taskNameLength) {
      verificationInput(false);
    } else if (!canAddTask && taskNameLength) {
      verificationInput(true);
    }
    if (!inputError && !taskNameLength) {
      changeErrorStatus(true);
    } else if (inputError && taskNameLength) {
      changeErrorStatus(false);
    }
  }

  render() {
    const {
      inputError,
      tabValue,
      tasks,
      children,
    } = this.props;
    const isCompleted = (tasks.length > 0 ? tasks[tasks.length - 1].isCompleted : true);
    const { timer } = this.state;
    const style = {
      grid: {
        maxWidth: 1440,
        margin: '0 auto',
      },
      input: {
        width: '300px',
        margin: '0 auto',
        display: 'flex',
      },
      inputProps: {
        color: (inputError ? palette.red[500] : palette.blue[900]),
        textAlign: 'center',
      },
      button: {
        margin: '0 auto 30px auto',
        display: 'flex',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
      },
      tabs: { width: '100%', background: palette.cyan[700] },
      tab: { color: palette.grey[50] },


    };
    return (
      <div style={{ height: 1000 }}>
        <MyModal />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={style.grid}
        >
          <Container maxWidth={false} className="task-init">
            <Input
              id="standard-basic"
              style={style.input}
              error={inputError}
              inputProps={{
                ref: this.inputRef,
                className: 'input-task-name',
                style: style.inputProps,
              }}
              fullWidth
              placeholder="Name of your task"
              onChange={this.inputErrorControler}
            />
            <Box className="circle" color="primary.main" fontWeight="500" fontSize={20}>
              <p className="time">{timeToString(timer)}</p>
            </Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              onClick={(isCompleted ? this.addInterval : this.removeInterval)}
              style={style.button}
            >
              {(isCompleted ? 'start' : 'stop')}
            </Button>
          </Container>
          <Tabs style={style.tabs} variant="fullWidth" value={tabValue}>
            <Tab style={style.tab} label="Tasks log" component={NavLink} to="/todoList/" />
            <Tab style={style.tab} label="Tasks chart" component={NavLink} to="/todoList/tasks-chart" />
          </Tabs>
          {children}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputError: state.UI.inputError,
  tabValue: state.UI.tabValue,
  modalIsOpen: state.UI.modalIsOpen,
  canAddTask: state.tasksManager.canAddTask,
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  changeErrorStatus: bindActionCreators(changeErrorStatusAction, dispatch),
  verificationInput: bindActionCreators(verificationInputAction, dispatch),
  startedTaskCreation: bindActionCreators(startedTaskCreationAction, dispatch),
  finishedTaskCreation: bindActionCreators(finishedTaskCreationAction, dispatch),
  modalControler: bindActionCreators(modalControlerAction, dispatch),
  uploadLocalStore: bindActionCreators(uploadLocalStoreAction, dispatch),
  downloadLocalStore: bindActionCreators(downloadLocalStoreAction, dispatch),
});

Timer.propTypes = {
  inputError: PropTypes.bool.isRequired,
  tabValue: PropTypes.number.isRequired,
  canAddTask: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  verificationInput: PropTypes.func.isRequired,
  changeErrorStatus: PropTypes.func.isRequired,
  finishedTaskCreation: PropTypes.func.isRequired,
  modalControler: PropTypes.func.isRequired,
  startedTaskCreation: PropTypes.func.isRequired,
  uploadLocalStore: PropTypes.func.isRequired,
  downloadLocalStore: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default connect(mapStateToProps, mapDispathToProps)(Timer);
