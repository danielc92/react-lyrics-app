import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './Context';
import Tracks from './components/Tracks';
import Nav from './components/Nav';


function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          
          {/* NAVBAR COMPONENT */}
          <Nav/>

          {/* TRACKS COMPONENT */}
          <Tracks/>

        </React.Fragment>
      </Router>
    </Provider>
  );
}


export default App;
