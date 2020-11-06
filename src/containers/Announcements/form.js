import React from 'react';
import { useFormik } from 'formik';

export default function (props) {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const { action, defaultValue1, defaultValue2 } = props;
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      id: null,
    },
    onSubmit: (values) => {
      action(values);
    },
  });
  console.log(props);
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="title"
        placeholder="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        defaultValue={defaultValue1}
      />
      <input
        id="description"
        name="description"
        placeholder="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        defaultValue={defaultValue2}
      />
      <button type="submit">Add</button>
    </form>
  );
}
