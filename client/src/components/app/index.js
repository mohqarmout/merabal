import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css';



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
