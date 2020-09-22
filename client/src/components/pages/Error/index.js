import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import errorImg from 'assets/robot-error-codes.png';
import styles from './error.module.css';

const PageNotFound = () => {
  return (
    <div className={`${styles.error} error-controller`}>
      <div className={styles.content}>
        <h1 className={`${styles.heading} ${styles.status}`}>404</h1>
        <h2 className={styles.heading}>Page not found</h2>
        <Link to="/">
          <Button type="primary" className={styles.btn}>
            Back Home
          </Button>
        </Link>
      </div>
      <img src={errorImg} alt="404 Error" className={styles.img} />
    </div>
  );
};

export default PageNotFound;
