import {
  CHANGE_ERROR_STATUS,
  MODAL_CONTROLER,
  TAB_CHANGE_ACTIVE,
} from '../actions/actions';

const initialState = {
  inputError: false,
  modalIsOpen: false,
  tabValue: 0,
  interval: 0,
};

const viewUI = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_STATUS:
      return { ...state, inputError: action.payload };
    case MODAL_CONTROLER:
      return { ...state, modalIsOpen: action.payload };
    case TAB_CHANGE_ACTIVE:
      return { ...state, tabValue: action.payload };
    default: return state;
  }
};

export default viewUI;
