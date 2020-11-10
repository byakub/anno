import React, { useState } from 'react';
import { Drawer, Divider } from 'antd';

import './styles.css';

export const InfoItem = (props) => {
  const { announcement, closeInfoModal, similarAnnouncement } = props;

  const [visible, setVisible] = useState(true);
  return (
    <>
      <Drawer
        width="50%"
        title="Detail"
        placement="right"
        closable={false}
        onClose={() => {
          setVisible(false);
          closeInfoModal();
        }}
        visible={visible}
        key="right"
      >
        <>
          <h2>{announcement.title}</h2>
          <h3>Description:</h3>
          <p>{announcement.description}</p>
          <h3>Date added:</h3>
          <p>{announcement.date}</p>
        </>
        <Divider />
        <h3>Similar announcements:</h3>
        {similarAnnouncement.slice(0, 3).map((elem) => {
          return (
            <div className="similar-announcement">
              <p className="similar-title">{elem.title}</p>
              <p className="similar-description">{elem.description}</p>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};
