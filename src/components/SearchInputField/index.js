import React from 'react';
import { Input } from 'antd';
import './styles.css';
const { Search } = Input;

export const SearchInputField = (props) => {
  const { action } = props;

  return (
    <Search className="searchInput" placeholder="Search..." onChange={action} />
  );
};
