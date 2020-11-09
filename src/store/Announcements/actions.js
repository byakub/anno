import actionTypes from './actionTypes';
import shortid from 'shortid';
import moment from 'moment';
import { selectAnnouncements } from './selectors';

export const addAnno = (announcement) => ({
  type: actionTypes.ADD_ANNO,
  payload: announcement,
});

export const deleteAnno = (announcement) => ({
  type: actionTypes.DELETE_ANNO,
  payload: announcement,
});
export const editAnno = (announcement) => ({
  type: actionTypes.EDIT_ANNO,
  payload: announcement,
});
export const searchAnno = (title) => ({
  type: actionTypes.SEARCH_ANNO,
  payload: title,
});

export const handleAddAnno = ({ title, description }) => (dispatch) => {
  const newAnno = {
    id: shortid.generate(),
    title: title,
    description: description,
    date: moment().format('LLL'),
  };
  dispatch(addAnno(newAnno));
};

export const handleEditAnno = ({ title, description, id }) => (
  dispatch,
  getState
) => {
  const state = selectAnnouncements(getState());

  const result = state.map((elem) => {
    if (elem.id === id) {
      elem.title = title;
      elem.description = description;
    }
    return elem;
  });
  dispatch(editAnno(result));
};

export const handleDeleteAnno = (id) => (dispatch, getState) => {
  const state = selectAnnouncements(getState());

  const result = state.filter((elem) => elem.id !== id);
  dispatch(deleteAnno(result));
};
