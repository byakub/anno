import React, { useState } from 'react';
import { Drawer, Divider } from 'antd';

export const AnnouncementItemInfo = (props) => {
  const { title, description, date, closeInfo, similarAnnouncement } = props;

  const [visible, setVisible] = useState(true);

  console.log('zxc', similarAnnouncement);
  return (
    <>
      <Drawer
        width={640}
        title="Detail"
        placement="right"
        closable={false}
        onClose={() => {
          setVisible(false);
          closeInfo();
        }}
        visible={visible}
        key="right"
      >
        <h2>{title}</h2>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Date added:</h3>
        <p>{date}</p>
        <Divider />
        <h3>Similar announcements:</h3>
        {similarAnnouncement.slice(0, 4).map((elem) => {
          return (
            <div>
              <p>{elem.title}</p>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};
