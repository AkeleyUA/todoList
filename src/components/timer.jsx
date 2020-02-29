import React from 'react';
import './timer.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import MyModal from './modal';
import TabMainLog from './tabMainLog';
import TabMainCharts from './tabMainCharts';
import HomePage from '../pages/home';
import ErrorIdTask from '../pages/error';
import TaskInfo from '../pages/taskInfo';
import {
  timerBtnChangeValue,
  changeErrorStatus,
  varificationInput,
  startedTaskCreation,
  finishedTaskCreation,
  deleteTask,
  changeTabActive,
  modalControler,
  tasksGenerator,
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
    const { timerBtnValue } = this.props;
    const start = localStorage.getItem('startLastTask');
    if (timerBtnValue === 'stop') {
      const interval = setInterval(() => (this.setState({ timer: new Date().getTime() - start })), 1000);
      this.setState({ interval });
    }
    window.addEventListener('unload', this.onUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('unload', this.onUnload);
  }

  onUnload = () => {
    const { tasks } = this.props;
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addInterval = () => {
    const { timerBtnChangeValue, startedTaskCreation } = this.props;
    const dataForTheTask = { start: new Date().getTime(), hour: new Date().getHours(), isCompleted: false };
    const interval = setInterval(() => (
      this.setState({ timer: new Date().getTime() - dataForTheTask.start })
    ), 1000);

    startedTaskCreation(dataForTheTask);
    timerBtnChangeValue('stop');

    localStorage.setItem('startLastTask', dataForTheTask.start);
    localStorage.setItem('timerStatus', 'stop');

    this.setState({ interval });
  }

  removeInterval = () => {
    const { interval } = this.state;
    const {
      canAddTask,
      varificationInput,
      changeErrorStatus,
      timerBtnChangeValue,
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
      timerBtnChangeValue('start');
      finishedTaskCreation(dataForTheTask);
      changeErrorStatus(false);
      varificationInput(false);

      localStorage.removeItem('startLastTask');
      localStorage.removeItem('timerStatus');

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
      tasksGenerator
    } = this.props;
    const chartsArray = [];

    if (tabValue === 0) {
      changeTabActive(1);
    }

    for (let i = 0; i < 24; i++) {
      chartsArray.push({ hour: i, duration: 0 });
    }

    chartsArray.map((chart, index) => {
      tasks.map((task) => {
        const minutesLeft = 60 - new Date(task.start).getMinutes();
        if (chart.hour === task.hour) {
          const spendToMinuts = (task.spend / 1000 / 60);
          if (spendToMinuts <= minutesLeft) {
            chart.duration += Math.floor(spendToMinuts);
          } else if (spendToMinuts > minutesLeft) {
            chart.duration += Math.floor(minutesLeft);
            const excessMinutes = spendToMinuts - minutesLeft;
            if (index < 23) {
              for (let i = 1; i < Math.floor(excessMinutes / 60) + 1; i++) {
                const nextIndex = index + i;
                chartsArray[(nextIndex > 23 ? nextIndex - 24 : nextIndex)].duration = 60;
              }
              chartsArray[
                (index + 1 + Math.floor(excessMinutes / 60) > 23
                  ? index + 1 + Math.floor(excessMinutes / 60) - 24
                  : index + 1 + Math.floor(excessMinutes / 60)
                )].duration = Math.floor(excessMinutes % 60);
            }
          }
        }
        return task;
      });
      return chart;
    });

    return (
      <TabMainCharts data={chartsArray} tasksGenerator={tasksGenerator} />
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
      error,
      timerBtnValue,
      varificationInput,
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
          error={error}
          timer={timer}
          varificationInput={varificationInput}
          tabValue={tabValue}
          timerBtnValue={timerBtnValue}
          inputRef={this.inputRef}
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
      `${(hours < 10 ? `0${hours}` : hours)}:
      ${(minuts < 10 ? `0${minuts}` : minuts)}:
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
  timerBtnValue: state.timerBtnValue,
  canAddTask: state.canAddTask,
  error: state.error,
  tasks: state.tasks,
  tabValue: state.tabValue,
  modalIsOpen: state.modalIsOpen,
  isCompleted: state.isCompleted,
});

const mapDispathToProps = (dispatch) => ({
  timerBtnChangeValue: bindActionCreators(timerBtnChangeValue, dispatch),
  changeErrorStatus: bindActionCreators(changeErrorStatus, dispatch),
  varificationInput: bindActionCreators(varificationInput, dispatch),
  startedTaskCreation: bindActionCreators(startedTaskCreation, dispatch),
  finishedTaskCreation: bindActionCreators(finishedTaskCreation, dispatch),
  deleteTask: bindActionCreators(deleteTask, dispatch),
  changeTabActive: bindActionCreators(changeTabActive, dispatch),
  modalControler: bindActionCreators(modalControler, dispatch),
  tasksGenerator: bindActionCreators(tasksGenerator, dispatch),
});


export default connect(mapStateToProps, mapDispathToProps)(Timer);
