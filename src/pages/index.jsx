import React from 'react';
import { connect } from 'react-redux';
import InfoPage from './taskInfo';
import ErrorIdPage from './errorIdTask';


const TaskInfoPage = ({ tasks, match }) => {
  const findTask = tasks.find((task) => +match.params.id === task.id);
  return (findTask !== undefined ? <InfoPage match={match} /> : <ErrorIdPage match={match} />);
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
});

export default connect(mapStateToProps)(TaskInfoPage);
