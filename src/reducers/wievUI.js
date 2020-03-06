import {
  CHANGE_ERROR_STATUS,
  MODAL_CONTROLER,
  TIMER_BTN_CHANGE_VALUE,
  TAB_CHANGE_ACTIVE,
} from '../actions/actions';

const timerBtnValueLocal = localStorage.getItem('timerStatus');
const initialState = {
  error: false,
  timerBtnValue: (timerBtnValueLocal !== null ? timerBtnValueLocal : 'start'),
  modalIsOpen: false,
  tabValue: 0,
};

const wievUI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_STATUS:
      return { ...state, error: action.payload };
    case MODAL_CONTROLER:
      return { ...state, modalIsOpen: action.payload };
    case TIMER_BTN_CHANGE_VALUE:
      return { ...state, timerBtnValue: action.payload };
    case TAB_CHANGE_ACTIVE:
      return { ...state, tabValue: action.payload };
    default: return state;
  }
};

export default wievUI;
