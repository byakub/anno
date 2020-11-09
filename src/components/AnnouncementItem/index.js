import React, { useState } from 'react';

import { Button, Card, Tooltip } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import { AnnouncementItemEdit } from '../Modal/AnnouncementItemEdit';
import { AnnouncementItemInfo } from '../Modal/AnnouncementItemInfo';
import { showDeleteConfirm } from '../../services/deleteConfirmation';

import './styles.css';

export const Item = (props) => {
  const {
    title,
    description,
    date,
    id,
    handleDeleteAnno,
    handleEditAnno,
    similarAnno,
  } = props;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const handleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };
  const toggleInfoModal = () => {
    setOpenInfoModal(!openInfoModal);
  };
  return (
    <div>
      <Card
        title={title}
        extra={
          <div>
            <Tooltip title="Detail">
              <Button
                shape="circle"
                onClick={toggleInfoModal}
                icon={<InfoCircleOutlined />}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                shape="circle"
                onClick={handleEditModal}
                icon={<EditOutlined />}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                shape="circle"
                onClick={() =>
                  showDeleteConfirm({ action: () => handleDeleteAnno(id) })
                }
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </div>
        }
      >
        <p className="card-description">{description}</p>
      </Card>

      {openEditModal && (
        <AnnouncementItemEdit
          id={id}
          currentValueTitle={title}
          currentValueDescr={description}
          action={handleEditAnno}
          closeEditModal={handleEditModal}
        />
      )}
      {openInfoModal && (
        <AnnouncementItemInfo
          title={title}
          description={description}
          date={date}
          closeInfo={toggleInfoModal}
          similarAnnouncement={similarAnno}
        />
      )}
    </div>
  );
};
