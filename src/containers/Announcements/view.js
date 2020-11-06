import React, { useState } from 'react';

const shortid = require('shortid');

export default function (props) {
  const { addAnno, announcements, deleteAnno, editAnno } = props;
  console.log(announcements);

  const [annoItem, setAnnoItem] = useState({ title: '', description: '' });

  const submitHandler = () => {
    // if (!annoItem.title.trim() || !annoItem.description.trim()) {
    // 	return message('fields can not be empty')
    // }

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
    //setToOpenForm(!toOpenForm);
    addAnno(newAnno);
    //message('New todo added!')
  };

  const changeInputHandler = (event) => {
    setAnnoItem({ ...annoItem, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Hello!</h1>

      <h1>ADD ITEM</h1>
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

      <button onClick={() => submitHandler()}>add a new anno</button>

      <h1>SHOW LIST</h1>
      {announcements.map((elem, index) => {
        return (
          <div key={index}>
            <h3>{elem.title}</h3>
            <h4>{elem.description}</h4>
            <h5>{elem.date}</h5>
            <button onClick={() => deleteAnno(elem.id)}>
              delete {index} item
            </button>
          </div>
        );
      })}
    </div>
  );
}
