import {
  STARTED_TASK_CREATION,
  FINISHED_TASK_CREATION,
  DELETE_TASK,
  GENERETE_TASKS,
} from '../actions/actions';

const tasksLocal = JSON.parse(localStorage.getItem('tasks'));
const initialState = ([]);

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case STARTED_TASK_CREATION:
      return [
        ...state, {
          id: action.payload.start,
          start: action.payload.start,
          end: 0,
          spend: 0,
          isCompleted: action.payload.isCompleted,
          hour: action.payload.hour,
        },
      ];
    case FINISHED_TASK_CREATION:
      return state.map((task, index) => {
        if (index === state.length - 1) {
          task.name = action.payload.name;
          task.end = action.payload.end;
          task.spend = action.payload.end - task.start;
          task.isCompleted = action.payload.isCompleted;
          return task;
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case GENERETE_TASKS:
      return action.payload;
    default: return state;
  }
};

export default tasks;
