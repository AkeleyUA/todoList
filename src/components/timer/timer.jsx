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
  putToLocalStoreAction,
  loadPageAction,
} from '../../reducers/tasksManager/actions';
import {
  modalControlerAction,
  inputErrorControlerAction,
} from '../../reducers/UI/action';

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
  button: {
    margin: '0 auto 30px auto',
    display: 'flex',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
  },
  tabs: { width: '100%', background: palette.cyan[700] },
  tab: { color: palette.grey[50] },
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: (
        props.tasks.length > 0
        && !props.tasks[props.tasks.length - 1].isCompleted
          ? new Date().getTime() - props.tasks[props.tasks.length - 1].start
          : 0
      ),
    };
    this.inputRef = React.createRef();
    this.interval = null;
  }

  componentDidMount() {
    const { tasks, loadPage } = this.props;
    const { timer } = this.state;
    const resetTimer = (n) => {
      if (n !== 0) {
        this.setState({ timer: 0 });
      }
    };
    const completed = (
      tasks.length > 0 && tasks[tasks.length - 1].isCompleted !== undefined
        ? tasks[tasks.length - 1].isCompleted
        : true
    );
    if (!completed) {
      this.interval = setInterval(() => (
        this.setState({
          timer: new Date().getTime() - tasks[tasks.length - 1].start,
        })
      ), 1000);
    } else if (completed && timer !== 0) {
      clearInterval(this.interval);
      resetTimer(timer);
    }
    loadPage();
  }

  componentWillUnmount() {
    const { putToLocalStore } = this.props;
    putToLocalStore();
    clearInterval(this.interval);
  }

  startHandler = () => {
    const { startedTaskCreation } = this.props;
    const dataForTheTask = {
      start: new Date().getTime(),
      hour: new Date().getHours(),
      isCompleted: false,
    };
    this.interval = setInterval(() => (
      this.setState({ timer: new Date().getTime() - dataForTheTask.start })
    ), 1000);
    startedTaskCreation(dataForTheTask);
  }

  stopHandler = () => {
    const {
      finishedTaskCreation,
      modalControler,
      inputErrorControler,
    } = this.props;
    const inputValue = this.inputRef.current.value;
    const dataForTheTask = {
      end: new Date().getTime(),
      name: inputValue,
      isCompleted: true,
    };

    if (inputValue.length > 0) {
      clearInterval(this.interval);
      finishedTaskCreation(dataForTheTask);
      this.inputRef.current.value = '';
      this.setState({ timer: 0 });
      inputErrorControler(false);
    } else {
      modalControler(true);
      this.inputRef.current.focus();
      inputErrorControler(true);
    }
  }

  render() {
    const {
      tasks,
      children,
      tabValue,
      inputError,
    } = this.props;
    const isCompleted = (tasks.length > 0 ? tasks[tasks.length - 1].isCompleted : true);
    const { timer } = this.state;
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
                style: {
                  color: (inputError ? palette.red[500] : palette.blue[900]),
                  textAlign: 'center',
                },
              }}
              fullWidth
              placeholder="Name of your task"
            />
            <Box className="circle" color="primary.main" fontWeight={500} fontSize={20}>
              <p className="time">{timeToString(timer)}</p>
            </Box>
            <Button
              variant="text"
              color="primary"
              type="submit"
              onClick={(isCompleted ? this.startHandler : this.stopHandler)}
              style={style.button}
            >
              {(isCompleted ? 'start' : 'stop')}
            </Button>
          </Container>
          <Tabs style={style.tabs} variant="fullWidth" value={tabValue}>
            <Tab
              style={style.tab}
              label="Tasks log"
              component={NavLink}
              to="/log"
            />
            <Tab
              style={style.tab}
              label="Tasks chart"
              component={NavLink}
              to="/chart"
            />
          </Tabs>
          {children}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputError: state.UI.inputError,
  modalIsOpen: state.UI.modalIsOpen,
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  startedTaskCreation: bindActionCreators(startedTaskCreationAction, dispatch),
  finishedTaskCreation: bindActionCreators(finishedTaskCreationAction, dispatch),
  modalControler: bindActionCreators(modalControlerAction, dispatch),
  putToLocalStore: bindActionCreators(putToLocalStoreAction, dispatch),
  inputErrorControler: bindActionCreators(inputErrorControlerAction, dispatch),
  loadPage: bindActionCreators(loadPageAction, dispatch),
});

Timer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  finishedTaskCreation: PropTypes.func.isRequired,
  modalControler: PropTypes.func.isRequired,
  startedTaskCreation: PropTypes.func.isRequired,
  putToLocalStore: PropTypes.func.isRequired,
  tabValue: PropTypes.number.isRequired,
  inputError: PropTypes.bool.isRequired,
  inputErrorControler: PropTypes.func.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Timer);
