import React from 'react';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>For safety world for you & me</h1>
      <p className={styles.description}>
        Don’t be afraid to speak up for yourself, keep fighting for your dream
      </p>
    </header>
  );
};

export default Header;
