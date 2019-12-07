import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import { notification } from 'antd';

import { Navbar, Loading } from 'components/utils';

import styles from './view.module.css';

const MapComponent = lazy(() => import('./Map'));
const TableInfo = lazy(() => import('./Table'));

class viewBuildings extends Component {
  state = { buildingInfo: [] };

  async componentDidMount() {
    // const openNotificationWithIcon = (type, message) => {
    //   notification[type]({
    //     message,
    //     duration: 2,
    //   });
    // };
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1/empty-buildings');
      if (data && data[0] && data[0].latitude && data[0].longitude)
        // what if the data were empty, and there wasn't an error?  ==> ahmad instruction

        this.setState({ buildingInfo: data });
    } catch (err) {
      // openNotificationWithIcon(
      //   'error',
      //   'Something went wrong! Please try again',
      // );
      notification.error({
        message: 'Something went wrong! Please try again',
        duration: 2,
      });
    }
  }

  render() {
    const { buildingInfo } = this.state;
    return (
      <>
        <Navbar />
        <div className="container" id="view">
          <div className={styles.view}>
            <h1 className={styles.heading}>View Buildings</h1>
            <p className={styles.content}>
              These buildings have been reported as empty or at risk by the
              community. Some may be in the process of verification.
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <MapComponent buildingInfo={buildingInfo} />
          </Suspense>
          <div className={styles.table}>
            <Suspense fallback={<Loading />}>
              <TableInfo buildingInfo={buildingInfo} />
            </Suspense>
          </div>
        </div>
      </>
    );
  }
}

export default viewBuildings;
