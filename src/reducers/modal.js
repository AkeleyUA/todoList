import { MODAL_CONTROLER } from '../actions/actions';

const initialState = false;

const modalIsOpen = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CONTROLER:
      return action.payload;
    default: return state;
  }
};

export default modalIsOpen;
