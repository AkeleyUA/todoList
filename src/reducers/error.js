import { CHANGE_ERROR_STATUS } from '../actions/actions';

const initialState = false;

const error = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_STATUS:
      return action.payload;
    default: return state;
  }
};

export default error;
