import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import { notification } from 'antd';

import { Navbar, Loading } from 'components/utils';

import styles from './view.module.css';

const TableInfo = lazy(() => import('./Table'));

class viewBuildings extends Component {
  state = { vicInfo: [] };

  async componentDidMount() {
    // const openNotificationWithIcon = (type, message) => {
    //   notification[type]({
    //     message,
    //     duration: 2,
    //   });
    // };
    try {
      const {
        data: { data }
      } = await axios.get('/api/v1/get-victim');
      if (data && data[0])
        // what if the data were empty, and there wasn't an error?  ==> ahmad instruction
        console.log(data);
      this.setState({ vicInfo: data });
    } catch (err) {
      // openNotificationWithIcon(
      //   'error',
      //   'Something went wrong! Please try again',
      // );
      notification.error({
        message: 'Something went wrong! Please try again',
        duration: 2
      });
    }
  }

  render() {
    const { vicInfo } = this.state;
    return (
      <>
        <Navbar />
        <div className='container' id='view'>
          <div className={styles.view}>
            <h1 className={styles.heading}>View Cases</h1>
            <p className={styles.content}>
            Please pick a case you think have the ability  to solve</p>
          </div>
          <div className={styles.table}>
            <Suspense fallback={<Loading />}>
              <TableInfo vicInfo={vicInfo} />
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
