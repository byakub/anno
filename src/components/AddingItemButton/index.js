import { Button } from 'antd';

import { FileAddOutlined } from '@ant-design/icons';

import './styles.css';

export const AddingItemButton = (props) => {
  const { action } = props;

  return (
    <Button
      className="button"
      onClick={action}
      type="primary"
      icon={<FileAddOutlined />}
      size={'large'}
    >
      Add announcement
    </Button>
  );
};
