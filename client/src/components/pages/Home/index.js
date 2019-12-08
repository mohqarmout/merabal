import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { Navbar, Loading } from '../../utils';

const ReportScamming = lazy(() => import('./reportScamming'));

class Home extends Component {
  redirectToView = () => {
    const { history } = this.props; // why do i need to check for history
    if (history) history.push('/get-victim'); // run after axios call
  };

  render() {
    return (
      <>
        <Navbar transparent />
        <Header onCityChange={this.handleCityChange} />
        <Suspense fallback={<Loading />}>
          <ReportScamming redirectToView={this.redirectToView} />
        </Suspense>
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Home;
