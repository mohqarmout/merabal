import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from 'assets/merabalv1.png';
import styles from './menu.module.css';

const SlideMenu = ({ showHideMenu }) => (
  <div className={styles.menu}>
    <nav className={styles.menu__nav}>
      <div className={styles['image-container']}>
        <Link to="/">
          <button
            type="button"
            className={styles.close__menu}
            onClick={() => showHideMenu()}
          >
            <svg
              height="30"
              viewBox="0 0 48 48"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
          </button>
        </Link>
        <Link to="/">
          <img className={styles.logo} alt="logo" src={logo} />
        </Link>
      </div>
      <ul className={styles.menu__list}>
        <li className={styles.list__item}>
          <Link to="/#Report-scame" className={styles.nav__link}>
          Report Scame
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/about" className={styles.nav__link}>
            About
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/View-cases" className={styles.nav__link}>
          View Cases
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

SlideMenu.propTypes = {
  showHideMenu: PropTypes.func.isRequired,
};

export default SlideMenu;
