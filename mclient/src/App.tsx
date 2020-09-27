import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import DashBoard from "./components/pages/dashboard";
import Map from "./components/pages/map"
import Human from "./components/pages/humanPage"
import Test from "./components/pages/test"


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={()=><DashBoard/> } exact/>
        <Route path="/map" component={Map} exact />
        <Route path="/human"  render={()=><Human/> } exact />
        <Route path="/test" component={Test} exact/>
      </Switch>
    </Router>
  );
};

export default App;
