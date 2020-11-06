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

export const handleAddAnno = (props) => (dispatch, getState) => {
  const state = getState();
  const { title, description } = props;
  const newAnno = {
    id: 3,
    title: title,
    description: description,
    date: new Date(),
  };
  dispatch(addAnno(newAnno));
};

export const handleEditAnno = (props) => (dispatch, getState) => {
  const state = getState();
  const { title, description, id } = props;
  console.log(typeof state.announcements);
  let result = [];
  const index = state.announcements.findIndex((elem) => elem.id === id);
  result = [...state.announcements];
  result[index] = {
    ...result[index],
    title: title,
    description: description,
  };
  dispatch(editAnno(result));
};
