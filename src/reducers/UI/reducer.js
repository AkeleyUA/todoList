import {
  MODAL_CONTROLER,
} from './action';

const initialState = {
  inputError: false,
  modalIsOpen: false,
  tabValue: 0,
};

const UI = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CONTROLER:
      return { ...state, modalIsOpen: action.payload };
    default: return state;
  }
};

export default UI;
