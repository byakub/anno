import actionTypes from './actionTypes';

export const addAnno = (announcement) => ({
  type: actionTypes.ADD_ANNO,
  payload: announcement,
});

export const deleteAnno = (id) => ({
  type: actionTypes.DELETE_ANNO,
  payload: id,
});
export const editAnno = (announcement) => ({
  type: actionTypes.EDIT_ANNO,
  payload: announcement,
});
