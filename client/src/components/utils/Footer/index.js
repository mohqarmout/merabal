import React from 'react';
import { Icon } from 'antd';

import Subscribe from './Subscribe';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} footer-controller`}>
      <div className={`${styles.container} container`}>
        <section className={styles.section}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.content}>
          We are an institution looking to help women to speak up for there  problem, trying to deliver a solution for the digital problem.
          </p>
          <Icon type="global" className={styles.icon} />
          <a href="http://www.farnearer.org/" className={styles.link}>
          Merabal.org
          </a>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>Contact Us</h2>
          <div className={styles.contact}>
            <p>
              <Icon type="environment" /> <span>Gaza, Palestine</span>
            </p>
            <p>
              <Icon type="twitter" /> <span>@merabal</span>
            </p>
            <p>
              <Icon type="mail" /> <span>merabal.org</span>
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>Join Our Mailing List</h2>
          <Subscribe />
          <p>Subscribe to our website and recieve updated news and emails</p>
        </section>
      </div>
      <div className={styles.bottom}>
        Copyright © 2019 Merabal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
