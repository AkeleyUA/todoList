import { VERIFICATION_INPUT } from '../actions/actions';

const initialState = false;

const canAddTask = (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION_INPUT:
      return action.payload;
    default: return state;
  }
};

export default canAddTask;
