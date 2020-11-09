import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { showMessage } from './message';

const { confirm } = Modal;

const getDeleteConfirm = () => ({ action, type }) => {
  confirm({
    title: 'Are you sure delete this announcement?',
    icon: <ExclamationCircleOutlined />,
    okText: 'Yes, sure',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      action();
      showMessage({ type: 'success', text: 'Deleted' });
    },
    onCancel() {},
  });
};

export const showDeleteConfirm = getDeleteConfirm();
