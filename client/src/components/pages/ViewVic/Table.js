import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import PropTypes from 'prop-types';

import styles from './view.module.css';

class TableInfo extends Component {
  state = { filteredInfo: {}, scrollVisable: false };

  componentDidMount() {
    window.addEventListener('resize', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollVisable: window.innerWidth < 700 });
  };

  handleChange = (pagination, filters) => {
    this.setState({
      filteredInfo: filters,
    });
  };

  render() {
    const { filteredInfo = {}, scrollVisable } = this.state;
    const { vicInfo } = this.props;
    const columns = [
      {
        title: 'Problem statement',
        dataIndex: 'problem',
        key: 'problem',
      },
      {
        title: 'ID number',
        dataIndex: 'idNumber',
        key: 'idNumber',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Checked',
        dataIndex: 'checked',
        key: 'checked',
        render: record =>
          record ? (
            <Tag className={styles.approved__tag} color="green">
              Abroved
            </Tag>
          ) : (
            <Tag className={styles.approved__tag} color="red">
              Pending
            </Tag>
          ),
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={vicInfo}
        onChange={this.handleChange}
        rowKey={record => record.id}
        scroll={scrollVisable ? { x: 700 } : false}
      />
    );
  }
}

TableInfo.propTypes = {
  buildingInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
export default TableInfo;
