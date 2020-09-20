import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashBoard from "./components/pages/dashboard";
import Map from "./components/pages/map"
import Human from "./components/pages/Human"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DashBoard} exact />
        <Route path="/map" component={Map} exact />
        <Route path="/human" component={Human} exact />
      </Switch>
    </Router>
  );
};

export default App;
