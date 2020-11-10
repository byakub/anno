import React, { forwardRef, useImperativeHandle } from 'react';
import { Input } from 'antd';
import { useFormik } from 'formik';

import './styles.css';

const { TextArea } = Input;

export default forwardRef((props, ref) => {
  const { action, announcement, buttonPermit } = props;

  useImperativeHandle(ref, () => ({
    formikHandleSubmit,
  }));
  const formik = useFormik({
    initialValues: {
      title: announcement.title,
      description: announcement.description,
      id: announcement.id || null,
    },
  });

  const { values, handleChange, handleBlur } = formik;

  buttonPermit(values);

  const formikHandleSubmit = () => {
    action(values);
  };
  return (
    <form onSubmit={formikHandleSubmit}>
      <Input
        id="title"
        placeholder="Title"
        name="title"
        type="text"
        onChange={handleChange}
        value={values.title}
        onBlur={handleBlur}
      />
      <TextArea
        rows={4}
        id="description"
        name="description"
        placeholder="Description"
        type="text"
        onChange={handleChange}
        value={values.description}
      />
    </form>
  );
});
