import {
  STARTED_TASK_CREATION,
  FINISHED_TASK_CREATION,
  DELETE_TASK,
  PUT_TASKS,
  VERIFICATION_INPUT,
} from '../actions/actions';

const initialState = {
  tasks: [],
  canAddTask: false,
};

const tasksManager = (state = initialState, action) => {
  switch (action.type) {
    case STARTED_TASK_CREATION:
      return {
        ...state,
        tasks: [
          ...state.tasks, {
            id: action.payload.start,
            start: action.payload.start,
            end: 0,
            spend: 0,
            isCompleted: action.payload.isCompleted,
            hour: action.payload.hour,
          },
        ],
      };
    case FINISHED_TASK_CREATION:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === state.tasks.length - 1) {
            task.name = action.payload.name;
            task.end = action.payload.end;
            task.spend = action.payload.end - task.start;
            task.isCompleted = action.payload.isCompleted;
            return task;
          }
          return task;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case PUT_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case VERIFICATION_INPUT:
      return {
        ...state,
        canAddTask: action.payload,
      };
    default: return state;
  }
};

export default tasksManager;
