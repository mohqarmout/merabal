import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './header.module.css';

const Header = () => {
  
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>For safety world for you & me</h1>
      <p className={styles.description}>
      Don’t be afraid to speak up for yourself. Keep fighting for your dream
      </p>
    </header>
  );
};

Header.propTypes = {
  onCityChange: PropTypes.func.isRequired,
};

export default Header;
