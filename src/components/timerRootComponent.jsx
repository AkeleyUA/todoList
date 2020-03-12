import React from 'react';
import './timer.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import MyModal from './modal';
import TabMainLog from './tabMainLog';
import TabMainCharts from './tabMainCharts';
import HomePage from '../pages/home';
import ErrorIdTask from '../pages/inputError';
import TaskInfo from '../pages/taskInfo';
import {
  changeErrorStatus,
  varificationInput,
  startedTaskCreation,
  finishedTaskCreation,
  deleteTask,
  changeTabActive,
  modalControler,
  putTasks,
  uploadLocalStore,
  downloadLocalStore,
} from '../actions/actions';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      interval: null,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { uploadLocalStore: upload, tasks } = this.props;
    upload();
    if (tasks.length > 0 && !tasks[tasks.length - 1].isCompleted) {
      const interval = setInterval(() => (
        this.setState({
          timer: new Date().getTime() - tasks[tasks.length - 1].start,
        })
      ), 1000);
      this.setState({ interval });
    }
    window.addEventListener('unload', this.onUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('unload', this.onUnload);
  }

  onUnload = () => {
    const { downloadLocalStore: download } = this.props;
    download();
  }

  addInterval = () => {
    const { startedTaskCreation: startCreate } = this.props;
    const dataForTheTask = {
      start: new Date().getTime(),
      hour: new Date().getHours(),
      isCompleted: false,
    };
    const interval = setInterval(() => (
      this.setState({ timer: new Date().getTime() - dataForTheTask.start })
    ), 1000);

    startCreate(dataForTheTask);
    this.setState({ interval });
  }

  removeInterval = () => {
    const { interval } = this.state;
    const {
      canAddTask,
      varificationInput,
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
      varificationInput(false);

      this.inputRef.current.value = '';

      this.setState({ timer: 0 });
    } else {
      modalControler(true);
      changeErrorStatus(true);
      varificationInput(false);

      this.inputRef.current.focus();
    }
  }

  tabMainLog = () => {
    const {
      deleteTask,
      changeTabActive,
      tasks,
      tabValue,
    } = this.props;

    if (tabValue === 1) {
      changeTabActive(0);
    }

    return (
      <TabMainLog deleteTask={deleteTask} tasks={tasks} timeToString={this.timeToString} />
    );
  }

  tabMainChart = () => {
    const {
      changeTabActive,
      tasks,
      tabValue,
      putTasks
    } = this.props;

    if (tabValue === 0) {
      changeTabActive(1);
    }

    const chartsArray = (hourInDay) => {
      let charts = [];
      let extraTime = 0;
      for (let i = 0; i < hourInDay; i += 1) {
        const findTask = tasks.filter((task) => task.hour === i);
        const spend = findTask.map((task) => task.spend);
        let spendSum = extraTime;
        for (let j = 0; j < spend.length; j += 1) {
          spendSum += Math.floor(spend[j] / 1000 / 60);
        }
        const minutesLeft = (findTask[0] !== undefined
          ? 60 - new Date(findTask[0].start).getMinutes() + extraTime
          : 60
        );
        const duration = (spendSum > minutesLeft
          ? (extraTime = spendSum - minutesLeft, minutesLeft)
          : (extraTime = 0, spendSum)
        );
        charts = [...charts, { hour: i, duration }];
      }
      return charts;
    };

    const chartsData = chartsArray(24);

    // console.log(charts);

    // const x = chartsData.map((chart, index) => {
    //   tasks.map((task) => {
    //     const minutesLeft = 60 - new Date(task.start).getMinutes();
    //     if (chart.hour === task.hour) {
    //       const spendToMinuts = (task.spend / 1000 / 60);
    //       if (spendToMinuts <= minutesLeft) {
    //         chartsData.duration += Math.floor(spendToMinuts);
    //       } else if (spendToMinuts > minutesLeft) {
    //         chart.duration += Math.floor(minutesLeft);
    //         const excessMinutes = spendToMinuts - minutesLeft;
    //         if (index < 23) {
    //           for (let i = 1; i < Math.floor(excessMinutes / 60) + 1; i++) {
    //             const nextIndex = index + i;
    //             chartsData[(nextIndex > 23 ? nextIndex - 24 : nextIndex)].duration = 60;
    //           }
    //           chartsData[
    //             (index + 1 + Math.floor(excessMinutes / 60) > 23
    //               ? index + 1 + Math.floor(excessMinutes / 60) - 24
    //               : index + 1 + Math.floor(excessMinutes / 60)
    //             )].duration = Math.floor(excessMinutes % 60);
    //         }
    //       }
    //     }
    //     return task;
    //   });
    //   return chart;
    // });

    return (
      <TabMainCharts data={chartsData} putTasks={putTasks} />
    );
  }

  closeModal = () => {
    const { modalControler } = this.props;
    modalControler(false);
  }

  inputErrorControler = () => {
    const { varificationInput, changeErrorStatus } = this.props;
    if (this.inputRef.current.value < 1) {
      varificationInput(false);
      changeErrorStatus(true);
    } else {
      varificationInput(true);
      changeErrorStatus(false);
    }
  }

  infoPage = (props) => {
    const { deleteTask, tasks } = this.props;
    let mustReturn = <ErrorIdTask paramsId={props.match.params.id} />;
    if (tasks.length > 0) {
      tasks.map((task) => {
        if (+props.match.params.id === task.id) {
          mustReturn = <TaskInfo deleteTask={deleteTask} task={task} timeToString={this.timeToString} />;
        }
        return task;
      });
    }
    return mustReturn;
  }

  homePage = () => {
    const {
      inputError,
      varificationInput,
      tasks,
      tabValue,
      modalIsOpen,
    } = this.props;
    const { timer } = this.state;
    return (
      <>
        <MyModal
          modalIsOpen={modalIsOpen}
          closeModal={this.closeModal}
          timeToString={this.timeToString}
        />
        <HomePage
          inputErrorControler={this.inputErrorControler}
          inputError={inputError}
          timer={timer}
          varificationInput={varificationInput}
          tabValue={tabValue}
          inputRef={this.inputRef}
          isCompleted={tasks.length > 0 ? tasks[tasks.length - 1].isCompleted : true}
          timeToString={this.timeToString}
          addInterval={this.addInterval}
          removeInterval={this.removeInterval}
          tabMainLog={this.tabMainLog}
          tabMainChart={this.tabMainChart}
        />
      </>
    );
  }

  timeToString = (counter) => {
    const hours = Math.floor((counter / 1000 / 60 / 60) % 60);
    const minuts = Math.floor((counter / 1000 / 60) % 60);
    const seconds = Math.floor((counter / 1000) % 60);
    return (
      `${(hours < 10 ? `0${hours}` : hours)} :
      ${(minuts < 10 ? `0${minuts}` : minuts)} :
      ${(seconds < 10 ? `0${seconds}` : seconds)}`
    );
  }

  render() {
    return (
      <>
        <Route exact path="/todoList/" component={this.homePage} />
        <Route path="/todoList/task/:id" component={this.infoPage} />
        <Route path="/todoList/tasks-chart" component={this.homePage} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  inputError: state.viewUI.inputError,
  tabValue: state.viewUI.tabValue,
  modalIsOpen: state.viewUI.modalIsOpen,
  isCompleted: state.viewUI.isCompleted,
  canAddTask: state.tasksManager.canAddTask,
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  changeErrorStatus: bindActionCreators(changeErrorStatus, dispatch),
  varificationInput: bindActionCreators(varificationInput, dispatch),
  startedTaskCreation: bindActionCreators(startedTaskCreation, dispatch),
  finishedTaskCreation: bindActionCreators(finishedTaskCreation, dispatch),
  deleteTask: bindActionCreators(deleteTask, dispatch),
  changeTabActive: bindActionCreators(changeTabActive, dispatch),
  modalControler: bindActionCreators(modalControler, dispatch),
  putTasks: bindActionCreators(putTasks, dispatch),
  uploadLocalStore: bindActionCreators(uploadLocalStore, dispatch),
  downloadLocalStore: bindActionCreators(downloadLocalStore, dispatch),
});

Timer.propTypes = {
  inputError: PropTypes.bool.isRequired,
  tabValue: PropTypes.number.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool,
  canAddTask: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeTabActive: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  varificationInput: PropTypes.func.isRequired,
  changeErrorStatus: PropTypes.func.isRequired,
  finishedTaskCreation: PropTypes.func.isRequired,
  modalControler: PropTypes.func.isRequired,
  putTasks: PropTypes.func.isRequired,
  startedTaskCreation: PropTypes.func.isRequired,
  uploadLocalStore: PropTypes.func.isRequired,
  downloadLocalStore: PropTypes.func.isRequired,
};

Timer.defaultProps = {
  isCompleted: false,
};

export default connect(mapStateToProps, mapDispathToProps)(Timer);
