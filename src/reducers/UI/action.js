export const MODAL_CONTROLER = 'MODAL_CONTROLER';
export const INPUT_ERROR = 'INPUT_ERROR';

export const modalControlerAction = (status) => ({
  type: MODAL_CONTROLER,
  payload: status,
});

export const inputErrorControlerAction = (status) => ({
  type: INPUT_ERROR,
  payload: status,
});
