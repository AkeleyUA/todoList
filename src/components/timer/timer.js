import React from 'react';
import './timer.css';
import { Button } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { MyModal } from '../modal/modal';
import { TabMain } from '../tabs/tabMain';
import { HomePage } from '../home/home';
import { ErrorIdTask } from '../errors/error';
import { TaskInfo } from '../info/taskInfo';
import { mapStateToProps, mapDispathToProps } from '../../store/actions';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { timeRunning, startLastTask, tick } = this.props;
    if (timeRunning === 'stop') {
      const timer = setInterval(() => tick(startLastTask), 1000);
      this.setState({ timer });
    }
  }

  addInterval = () => {
    const { changeRunTime, addNewTask, tick } = this.props;
    const start = new Date();
    addNewTask({ start: start.getTime(), hour: start.getHours(), isCompleted: false });
    changeRunTime('stop');

    // Redux saga
    const timer = setInterval(() => tick(start), 1000);
    this.setState({ timer });
  }

  removeInterval = () => {
    const {
      canAddTask,
      verificationCanAddTask,
      changeErrorStatus,
      counter,
      removeCounter,
      changeRunTime,
      finishTask,
      modalControler,
    } = this.props;
    const { timer } = this.state;

    if (canAddTask) {
      clearInterval(timer);
      changeRunTime('start');
      finishTask({
        end: new Date().getTime(),
        spend: counter,
        name: this.inputRef.current.value,
        isCompleted: true,
      });
      removeCounter();
      changeErrorStatus(false);
      verificationCanAddTask(false);
      this.inputRef.current.value = '';
    } else {
      changeErrorStatus(true);
      modalControler(true);
      this.inputRef.current.focus();
    }
  }

  tabMainLog = () => {
    const { deleteTask, changeTabActive, tasks } = this.props;
    changeTabActive(0);
    return (
      <TabMain deleteTask={deleteTask} tasks={tasks} timeToString={this.timeToString} />
    );
  }

  tabMainChart = () => {
    const { changeTabActive, tasks, tasksGenerator } = this.props;
    const chartsArray = [];// Перенести массив в initial state, не создавать сдеся.
    changeTabActive(1);

    for (let i = 0; i < 24; i++) {
      chartsArray.push({ hour: i, duration: 0 });
    }

    // //Тестовый массив для графика, пока нет GENERATE.
    // const data = [
    //   {id:1582506447864, start: 1582506447864, end: 1582506451913, spend: 400111, isCompleted: true, hour: 3, name:"1" },
    //   {id:1582506447865, start: 1582506447865, end: 1582506451914, spend: 200000, isCompleted: true, hour: 4, name:"1" },
    //   {id:1582506447866, start: 1582506447866, end: 1582506451915, spend: 564564, isCompleted: true, hour: 5, name:"1" },
    //   {id:1582506447867, start: 1582506447867, end: 1582506451916, spend: 400111, isCompleted: true, hour: 6, name:"1" },
    //   {id:1582506447868, start: 1582506447868, end: 1582506451917, spend: 7800000, isCompleted: true, hour: 7, name:"1" }
    // ];

    chartsArray.map((chart, index) => {
      tasks.map((task) => {
        const minutesLeft = 60 - new Date(task.start).getMinutes();
        if (chart.hour === task.hour) {
          const spendToMinuts = (task.spend / 1000 / 60);
          if (spendToMinuts < minutesLeft + 1) {
            chart.duration += spendToMinuts;
          } else if (index + 1 < 24) {
            chartsArray[index + 1].duration = chart.duration + spendToMinuts - minutesLeft;
            chart.duration += minutesLeft;
          }
        } else if (chart.duration > 60) {
          chart.duration = 60;
          if (index + 1 < 24) {
            chartsArray[index + 1].duration = chart.duration - 60;
          }// Не забыть про 0 index;
        } // Баг tasl.duration > 120 min
        return task;
      });
      return chart;
    });

    // Логика и разметка, не хорошо.

    return (
      <>
        <ResponsiveContainer height={430}>
          <BarChart
            data={chartsArray}
            margin={{
              top: 50,
              right: 20,
              bottom: 50,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" domain={[0, 24]} />
            <YAxis domain={[0, 60]} />
            <Legend />
            <Bar name="Minuts in this hours" dataKey="duration" fill={blue[900]} width={30} />
          </BarChart>
        </ResponsiveContainer>
        <Button style={{ position: 'fixed', bottom: 50, right: 50 }} variant="contained" onClick={tasksGenerator}>generate</Button>
      </>
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
      });
    }
    return mustReturn;
  }

  homePage = () => {
    const {
      error,
      timeRunning,
      counter,
      varificationInput,
      tabValue,
      modalIsOpen,
    } = this.props;
    return (
      <>
        <MyModal
          modalIsOpen={modalIsOpen}
          closeModal={this.closeModal}
          timeToString={this.timeToString}
        />
        <HomePage
          error={error}
          counter={counter}
          varificationInput={varificationInput}
          tabValue={tabValue}
          timeRunning={timeRunning}
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
        <Route exact path="/" component={this.homePage} />
        <Route path="/task/:id" component={this.taskInfo} />
        <Route path="/tasks-chart" component={this.homePage} />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Timer);
