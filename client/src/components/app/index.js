import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css';



function App() {
  return (
    <div>
      <Router>
        <Switch>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
