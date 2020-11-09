import React, { useState, useRef } from 'react';
import { Modal } from 'antd';
import Form from '../../Form';
import { showMessage } from '../../../services/message';

export const AnnouncementItemEdit = (props) => {
  const {
    id,
    currentValueTitle,
    currentValueDescr,
    action,
    closeEditModal,
  } = props;

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
          id={id}
          currentValueTitle={currentValueTitle}
          currentValueDescr={currentValueDescr}
          action={action}
          buttonpermit={permitOkButton}
        />
      </Modal>
    </>
  );
};
