import { message } from 'antd';

const getMessage = () => ({ text, type }) => {
  message[type](text, 2);
};

export const showMessage = getMessage();
