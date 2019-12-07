import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';

import styles from './loading.module.css';

const Loading = ({ className = '' }) => {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return (
    <div className={`${styles.loader} ${className}`}>
      <Spin className={styles['span-icon']} indicator={antIcon} />
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};

export default Loading;
