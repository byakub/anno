import actionTypes from './actionTypes';
import shortid from 'shortid';
import moment from 'moment';
import { selectAnnouncements } from './selectors';

export const addAnnouncement = (announcement) => ({
  type: actionTypes.ADD_ANNOUNCEMENT,
  payload: announcement,
});

export const deleteAnnouncement = (announcement) => ({
  type: actionTypes.DELETE_ANNOUNCEMENT,
  payload: announcement,
});
export const editAnnouncement = (announcement) => ({
  type: actionTypes.EDIT_ANNOUNCEMENT,
  payload: announcement,
});
export const searchAnnouncement = (title) => ({
  type: actionTypes.SEARCH_ANNOUNCEMENT,
  payload: title,
});
export const currentAnnouncementId = (id) => ({
  type: actionTypes.CURRENT_ANNOUNCEMENT_ID,
  payload: id,
});

export const handleAddAnnouncement = ({ title, description }) => (dispatch) => {
  const newAnno = {
    id: shortid.generate(),
    title: title,
    description: description,
    date: moment().format('LLL'),
  };
  dispatch(addAnnouncement(newAnno));
};

export const handleEditAnnouncement = ({ title, description, id }) => (
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
  dispatch(editAnnouncement(result));
};

export const handleDeleteAnnouncement = (id) => (dispatch, getState) => {
  const state = selectAnnouncements(getState());

  const result = state.filter((elem) => elem.id !== id);
  dispatch(deleteAnnouncement(result));
};
