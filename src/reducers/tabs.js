import { TAB_CHANGE_ACTIVE } from '../actions/actions';


const initialState = 0;

const tabValue = (state = initialState, action) => {
  switch (action.type) {
    case TAB_CHANGE_ACTIVE:
      return action.payload;
    default: return state;
  }
};

export default tabValue;
