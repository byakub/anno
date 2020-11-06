import React, { useState } from 'react';
import Form from './form';

export default function (props) {
  const {
    addAnno,
    announcements,
    deleteAnno,
    handleAddAnno,
    handleEditAnno,
  } = props;

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

  return (
    <div>
      <h1>Hello!</h1>
      <h1>ADD ITEM</h1>
      <button onClick={() => addMenuHandler()}>Open/Close Add Menu</button>
      {openMenu.add ? <Form action={handleAddAnno} /> : <></>}

      <h1>SHOW LIST</h1>
      {announcements.map((elem, index) => {
        return (
          <div key={index}>
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <p>{String(elem.date)}</p>
            <button onClick={() => deleteAnno(elem.id)}>
              delete {index} item
            </button>
            <h1>Edit items</h1>
            <button onClick={() => editMenuHandler(elem)}>
              Open/Close Edit Menu
            </button>
            {openMenu.edit ? (
              <Form
                id={elem.id}
                defaultValue1={elem.title}
                defaultValue2={elem.description}
                action={handleEditAnno}
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
