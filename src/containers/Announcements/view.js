import React, { useState } from 'react';

const shortid = require('shortid');

export default function (props) {
  const { addAnno, announcements, deleteAnno, editAnno } = props;

  const [annoItem, setAnnoItem] = useState({
    title: '',
    description: '',
  });

  const [editAnnoItem, setEditAnnoItem] = useState({
    title: '',
    description: '',
    id: null,
  });

  const [openMenu, setOpenMenu] = useState({ edit: false, add: false });

  const editMenuHandler = (elem) => {
    setEditAnnoItem({
      title: elem.title,
      description: elem.description,
      id: elem.id,
    });
    setOpenMenu({ ...openMenu, edit: !openMenu.edit });
  };
  const addMenuHandler = () => {
    setOpenMenu({ ...openMenu, add: !openMenu.add });
  };

  const submitAddAnno = () => {
    const newAnno = {
      id: shortid.generate(),
      title: annoItem.title,
      description: annoItem.description,
      date: new Date().toLocaleDateString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
    };
    setAnnoItem({ title: '', description: '' });
    addAnno(newAnno);
    setOpenMenu({ ...openMenu, add: !openMenu.add });
  };

  const submitEditAnno = () => {
    editAnno(editAnnoItem);
    setEditAnnoItem({ title: '', description: '', id: null });
    setOpenMenu({ ...openMenu, edit: !openMenu.edit });
  };

  const changeInputHandler = (event) => {
    setAnnoItem({ ...annoItem, [event.target.name]: event.target.value });
  };
  const changeEditHandler = (event) => {
    setEditAnnoItem({
      ...editAnnoItem,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Hello!</h1>
      <h1>ADD ITEM</h1>
      <button onClick={() => addMenuHandler()}>Open/Close Add Menu</button>
      {openMenu.add ? (
        <div>
          <input
            placeholder="title"
            name="title"
            value={annoItem.title}
            onChange={changeInputHandler}
          />
          <input
            placeholder="description"
            name="description"
            value={annoItem.description}
            onChange={changeInputHandler}
          />

          <button onClick={() => submitAddAnno()}>add a new anno</button>
        </div>
      ) : (
        <></>
      )}

      <h1>SHOW LIST</h1>
      {announcements.map((elem, index) => {
        return (
          <div key={index}>
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <p>{elem.date}</p>
            <button onClick={() => deleteAnno(elem.id)}>
              delete {index} item
            </button>
            <h1>Edit items</h1>
            <button onClick={() => editMenuHandler(elem)}>
              Open/Close Edit Menu
            </button>
            {openMenu.edit ? (
              <div>
                <input
                  name="title"
                  value={editAnnoItem.title}
                  onChange={changeEditHandler}
                />
                <input
                  name="description"
                  value={editAnnoItem.description}
                  onChange={changeEditHandler}
                />
                <button onClick={() => submitEditAnno()}>Save Anno</button>
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
