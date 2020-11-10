import React, { useState } from 'react';
import { AnnouncementItem } from '../../components/AnnouncementItem';

import { AddItem } from '../../components/Modal';
import { EditItem } from '../../components/Modal';
import { InfoItem } from '../../components/Modal';

import { showDeleteConfirm } from '../../services/deleteConfirmation';
import { SearchInputField } from '../../components/SearchInputField';
import { AddingItemButton } from '../../components/AddingItemButton';

import './styles.css';

export const Announcements = (props) => {
  const {
    list,
    handleDeleteAnnouncement,
    handleAddAnnouncement,
    handleEditAnnouncement,
    searchAnnouncement,
    similarAnnouncements,
    currentAnnouncementId,
    currentAnnouncementItem,
  } = props;

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const toggleAddModal = () => {
    setOpenAddModal(!openAddModal);
  };

  const handleEditModal = (id) => {
    currentAnnouncementId(id);
    setOpenEditModal(!openEditModal);
  };
  const toggleInfoModal = (id) => {
    currentAnnouncementId(id);
    setOpenInfoModal(!openInfoModal);
  };

  const handleDeleteModal = (id) => {
    showDeleteConfirm({ action: () => handleDeleteAnnouncement(id) });
  };

  return (
    <div className="announcement-list">
      <AddingItemButton
        action={() => {
          toggleAddModal();
        }}
      />
      <SearchInputField
        action={(event) => searchAnnouncement(event.target.value)}
      />

      {list.length ? (
        list.map((elem) => {
          return (
            <AnnouncementItem
              key={elem.id}
              announcement={elem}
              handleDeleteAnnouncement={handleDeleteModal}
              handleEditAnnouncement={handleEditModal}
              handleInfoAnnouncement={toggleInfoModal}
            />
          );
        })
      ) : (
        <p className="empty-list">No announcements! =I</p>
      )}
      {openEditModal && (
        <EditItem
          announcement={currentAnnouncementItem}
          action={handleEditAnnouncement}
          closeEditModal={handleEditModal}
        />
      )}
      {openInfoModal && (
        <InfoItem
          announcement={currentAnnouncementItem}
          closeInfoModal={toggleInfoModal}
          similarAnnouncement={similarAnnouncements[currentAnnouncementItem.id]}
        />
      )}
      {openAddModal && (
        <>
          <AddItem
            action={handleAddAnnouncement}
            closeAddModal={toggleAddModal}
          />
        </>
      )}
    </div>
  );
};
