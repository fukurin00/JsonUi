import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashBoard from "./components/pages/dashboard";
import Map from "./components/pages/map"
import Human from "./components/pages/Human"


import io from 'socket.io-client';

const socket : SocketIOClient.Socket = io()

socket.on('connect', () => {
  console.log('Socket.IO connected!')
})

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={()=><DashBoard socket = {socket}/> } exact/>
        <Route path="/map" component={Map} exact />
        <Route path="/human"  render={()=><Human socket = {socket}/> } exact />
      </Switch>
    </Router>
  );
};

export default App;
