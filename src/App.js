import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';


import Nav from './components/Nav';
import ProjectsList from './containers/ProjectsList';
import PsAccountList from './containers/PsAccountList';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={ProjectsList}/>
          <Route path="/ps" component={PsAccountList}/>
        </div>
      </Router>
    );
  }
}

export default App;
