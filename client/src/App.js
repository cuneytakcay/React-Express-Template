import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { developers: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(developers => this.setState({ developers }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skill Share App</h1>
          <h2>Development Team</h2>
        </header>
        {this.state.developers.map(developer => 
          <div key={developer.id}>{developer.name}</div>
        )}
      </div>
    );
  }
}

export default App;
