import React, { useState, useRef } from 'react';
import { Modal } from 'antd';
import Form from '../../Form';
import { showMessage } from '../../../services/message';

export const AnnouncementItemAdd = (props) => {
  const { action, closeAddModal } = props;

  const formikRef = useRef();

  const [visible, setVisible] = useState(true);
  const [okButtonDisabled, setOkButtonDisabled] = useState(false);

  const permitOkButton = ({ title, description }) => {
    let permit = false;
    if (title.trim('') !== '' && description.trim('') !== '') {
      permit = true;
    }
    setOkButtonDisabled(!permit);
  };
  return (
    <>
      <Modal
        title="Add a new announcement"
        centered
        visible={visible}
        okButtonProps={{ disabled: okButtonDisabled }}
        onOk={() => {
          formikRef.current.formikHandleSubmit();
          setVisible(false);
          closeAddModal();
          showMessage({ type: 'success', text: 'Added' });
        }}
        onCancel={() => {
          setVisible(false);
          closeAddModal();
          showMessage({ type: 'warning', text: 'Canceled' });
        }}
        width={600}
      >
        <Form ref={formikRef} action={action} buttonpermit={permitOkButton} />
      </Modal>
    </>
  );
};
