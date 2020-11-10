import React, { useState, useRef } from 'react';
import { Modal } from 'antd';
import Form from '../../Form';
import { showMessage } from '../../../services/message';

import './styles.css';

export const EditItem = (props) => {
  const { announcement, action, closeEditModal } = props;

  const formikRef = useRef();

  const [visible, setVisible] = useState(true);
  const [okButtonDisabled, setOkButtonDisabled] = useState(false);

  console.log('iam here!');
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
        title="Edit a current announcement"
        centered
        visible={visible}
        okButtonProps={{ disabled: okButtonDisabled }}
        onOk={() => {
          formikRef.current.formikHandleSubmit();
          setVisible(false);
          closeEditModal();
          showMessage({ type: 'success', text: 'Edited' });
        }}
        onCancel={() => {
          setVisible(false);
          closeEditModal();
          showMessage({ type: 'warning', text: 'Canceled' });
        }}
        width={600}
      >
        <Form
          ref={formikRef}
          announcement={announcement}
          action={action}
          buttonPermit={permitOkButton}
        />
      </Modal>
    </>
  );
};
