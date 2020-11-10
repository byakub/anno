import React from 'react';

import { Button, Card, Tooltip } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import './styles.css';

export const AnnouncementItem = (props) => {
  const {
    announcement,
    handleDeleteAnnouncement,
    handleEditAnnouncement,
    handleInfoAnnouncement,
  } = props;

  return (
    <>
      <Card
        title={announcement.title}
        extra={
          <>
            <Tooltip title="Detail" color="#1890ff">
              <Button
                shape="circle"
                onClick={() => handleInfoAnnouncement(announcement.id)}
                icon={<InfoCircleOutlined />}
              />
            </Tooltip>
            <Tooltip title="Edit" color="#1890ff">
              <Button
                shape="circle"
                onClick={() => handleEditAnnouncement(announcement.id)}
                icon={<EditOutlined />}
              />
            </Tooltip>
            <Tooltip title="Delete" color="#1890ff">
              <Button
                shape="circle"
                onClick={() => handleDeleteAnnouncement(announcement.id)}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </>
        }
      >
        <p className="card-description">{announcement.description}</p>
      </Card>
    </>
  );
};
