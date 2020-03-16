export const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';
export const TAB_CHANGE_ACTIVE = 'TAB_CHANGE_ACTIVE';
export const MODAL_CONTROLER = 'MODAL_CONTROLER';

export const changeErrorStatusAction = (status) => ({
  type: CHANGE_ERROR_STATUS,
  payload: status,
});

export const changeTabActiveAction = (value) => ({
  type: TAB_CHANGE_ACTIVE,
  payload: value,
});

export const modalControlerAction = (status) => ({
  type: MODAL_CONTROLER,
  payload: status,
});
