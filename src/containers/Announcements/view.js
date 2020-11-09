import React, { useState } from 'react';
import { AnnouncementItemAdd } from '../../components/Modal/AnnouncementItemAdd';

import { Item } from '../../components/AnnouncementItem';

export const Announcements = (props) => {
  const {
    list,
    handleDeleteAnno,
    handleAddAnno,
    handleEditAnno,
    searchAnno,
    similarAnnouncements,
  } = props;

  const [openAddModal, setOpenAddModal] = useState(false);
  const toggleAddModal = () => {
    setOpenAddModal(!openAddModal);
  };
  console.log(props, 'props');
  return (
    <div>
      <input
        placeholder="Search announcements"
        onChange={(event) => searchAnno(event.target.value)}
      />
      <button
        onClick={() => {
          toggleAddModal();
        }}
      >
        Add Announcement
      </button>
      {openAddModal && (
        <div>
          <AnnouncementItemAdd
            type="Add"
            action={handleAddAnno}
            closeAddModal={toggleAddModal}
          />
        </div>
      )}
      {list.map((elem, index) => {
        return (
          <Item
            key={index}
            title={elem.title}
            description={elem.description}
            date={elem.date}
            id={elem.id}
            handleDeleteAnno={handleDeleteAnno}
            handleEditAnno={handleEditAnno}
            similarAnno={similarAnnouncements[elem.id]}
          />
        );
      })}
      {/* {} */}
    </div>
  );
};
