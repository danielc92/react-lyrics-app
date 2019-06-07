import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './Context';
import Tracks from './components/Tracks';
import Nav from './components/Nav';
import Lyrics from './components/Lyrics';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          
          {/* NAVBAR COMPONENT */}
          <Nav/>
          
          <Switch>
            <Route exact path="/" component={Tracks}/>
            <Route exact path="/lyrics/track/:id" component={Lyrics}/>
          </Switch>


        </React.Fragment>
      </Router>
    </Provider>
  );
}


export default App;
