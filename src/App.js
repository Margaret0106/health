import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import ProjectsList from './containers/ProjectsList';

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <ProjectsList />
      </div>
    );
  }
}

export default App;
