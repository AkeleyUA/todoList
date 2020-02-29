import React from 'react';
import './timer.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import MyModal from '../modal/modal';
import TabMainLog from '../tabs/tabMainLog';
import TabMainCharts from '../tabs/tabMainCharts';
import HomePage from '../../pages/home';
import ErrorIdTask from '../../pages/error';
import TaskInfo from '../../pages/taskInfo';
import {
  timerBtnChangeValue,
  verificationCanAddTask,
  changeErrorStatus,
  varificationInput,
  addNewTask,
  finishTask,
  deleteTask,
  changeTabActive,
  modalControler,
  tasksGenerator,
} from '../../store/actions';

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
    const { timerBtnChangeValue, addNewTask } = this.props;
    const start = new Date();
    localStorage.setItem('startLastTask', start.getTime());
    localStorage.setItem('timerStatus', 'stop');
    addNewTask({ start: start.getTime(), hour: start.getHours(), isCompleted: false });
    timerBtnChangeValue('stop');

    // Redux saga
    const interval = setInterval(() => (this.setState({ timer: new Date().getTime() - start })), 1000);
    this.setState({ interval });
  }

  removeInterval = () => {
    const {
      canAddTask,
      verificationCanAddTask,
      changeErrorStatus,
      timerBtnChangeValue,
      finishTask,
      modalControler,
    } = this.props;
    const { interval } = this.state;

    if (canAddTask) {
      clearInterval(interval);
      this.setState({ timer: 0 });
      timerBtnChangeValue('start');
      finishTask({
        end: new Date().getTime(),
        name: this.inputRef.current.value,
        isCompleted: true,
      });
      changeErrorStatus(false);
      verificationCanAddTask(false);
      localStorage.removeItem('startLastTask');
      localStorage.removeItem('timerStatus');
      this.inputRef.current.value = '';
    } else {
      changeErrorStatus(true);
      modalControler(true);
      this.inputRef.current.focus();
    }
  }

  tabMainLog = () => {
    const { deleteTask, changeTabActive, tasks, tabValue } = this.props;
    if (tabValue === 1) {
      changeTabActive(0);
    }
    return (
      <TabMainLog deleteTask={deleteTask} tasks={tasks} timeToString={this.timeToString} />
    );
  }

  tabMainChart = () => {
    const { changeTabActive, tasks, tabValue, tasksGenerator } = this.props;
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
            chart.duration += Math.round(spendToMinuts);
          } else if (spendToMinuts > minutesLeft) {
            chart.duration += Math.round(minutesLeft);
            const excessMinutes = spendToMinuts - minutesLeft;
            if (index < 23) {
              for (let i = 1; i < Math.floor(excessMinutes / 60); i++) {
                const nextIndex = index + i;
                chartsArray[(nextIndex > 23 ? nextIndex - 24 : nextIndex)].duration = 60;
              }
              chartsArray[
                (index + 1 + Math.floor(excessMinutes / 60) > 23
                  ? index + 1 + Math.floor(excessMinutes / 60) - 24
                  : index + 1 + Math.floor(excessMinutes / 60)
                )].duration = Math.round(excessMinutes % 60);
            }
          }
        }
        return task;
      });
      console.log(chart);
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

  taskInfo = (props) => {
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
    return `${(hours < 10 ? `0${hours}` : hours)}:${(minuts < 10 ? `0${minuts}` : minuts)}:${(seconds < 10 ? `0${seconds}` : seconds)} `;
  }


  render() {
    return (
      <>
        <Route exact path="/todoList/" component={(this.homePage)} />
        <Route path="/todoList/task/:id" component={this.taskInfo} />
        <Route path="/todoList/tasks-chart" component={this.homePage} />
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  timerBtnValue: state.timerBtnValue,
  counter: state.counter,
  canAddTask: state.canAddTask,
  error: state.error,
  tasks: state.tasks,
  tabValue: state.tabValue,
  modalIsOpen: state.modalIsOpen,
  isCompleted: state.isCompleted,
  startLastTask: state.startLastTask,
});

const mapDispathToProps = (dispatch) => ({
  timerBtnChangeValue: bindActionCreators(timerBtnChangeValue, dispatch),
  verificationCanAddTask: bindActionCreators(verificationCanAddTask, dispatch),
  changeErrorStatus: bindActionCreators(changeErrorStatus, dispatch),
  varificationInput: bindActionCreators(varificationInput, dispatch),
  addNewTask: bindActionCreators(addNewTask, dispatch),
  finishTask: bindActionCreators(finishTask, dispatch),
  deleteTask: bindActionCreators(deleteTask, dispatch),
  changeTabActive: bindActionCreators(changeTabActive, dispatch),
  modalControler: bindActionCreators(modalControler, dispatch),
  tasksGenerator: bindActionCreators(tasksGenerator, dispatch),
});


export default connect(mapStateToProps, mapDispathToProps)(Timer);
