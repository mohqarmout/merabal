import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css';

import { Footer } from 'components/utils';
import About from 'components/pages/AboutUs';
import Error from 'components/pages/Error';
import viewBuildings from 'components/pages/ViewVic';
import Home from 'components/pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/get-victim" component={viewBuildings} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
