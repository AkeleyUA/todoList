import { TIMER_BTN_CHANGE_VALUE } from '../actions/actions';

const timerBtnValueLocal = localStorage.getItem('timerStatus');
const initialState = (timerBtnValueLocal !== null ? timerBtnValueLocal : 'start');

const timerBtnValue = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_BTN_CHANGE_VALUE:
      return action.payload;
    default: return state;
  }
};

export default timerBtnValue;
