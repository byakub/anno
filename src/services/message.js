import React from 'react';
import { message, Space } from 'antd';

const success = (text) => {
  message.success(text);
};

const error = (text) => {
  message.error(text);
};

export default (props) => {
  const { type, text } = props;

  {
    type === 'success' ? success(text) : type === 'error' ? error(text) : null;
  }
};
