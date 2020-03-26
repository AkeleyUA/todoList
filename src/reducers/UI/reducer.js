import {
  MODAL_CONTROLER, INPUT_ERROR,
} from './action';

const initialState = {
  inputError: false,
  modalIsOpen: false,
};

const UI = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CONTROLER:
      return { ...state, modalIsOpen: action.payload };
    default: return state;
    case INPUT_ERROR:
      return { ...state, inputError: action.payload };
  }
};

export default UI;
