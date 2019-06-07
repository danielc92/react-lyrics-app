import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './Context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          
          {/* THE NAVBAR */}
          <Nav/>

          <h1>Lyric App</h1>
        
        </React.Fragment>
      </Router>
    </Provider>
  );
}


export default App;
