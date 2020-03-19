import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfoPage from './taskInfo';
import ErrorIdPage from './errorIdTask';
import { uploadLocalStoreAction } from '../reducers/tasksManager/actions';


const TaskInfoPage = ({ tasks, match }) => {
  const findTask = tasks.find((task) => +match.params.id === task.id);
  return (findTask !== undefined ? <InfoPage match={match} /> : <ErrorIdPage match={match} />);
};

const mapStateToProps = (state) => ({
  tasks: state.tasksManager.tasks,
});

const mapDispathToProps = (dispatch) => ({
  uploadLocalStore: bindActionCreators(uploadLocalStoreAction, dispatch),
});

TaskInfoPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(TaskInfoPage);
