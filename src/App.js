import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selection: []
    };
  }
  render() {
    return (
      <div className="App">
        <IconSettings iconPath="./assets/icons/">
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
          <Header />
          <div className="container">
            <Dropdown />
          </div>

          {/* <Button label="Hello Button" /> */}
          {/* <Combobox
          id="combobox-unique-id"
          labels={{
            label: 'City',
            placeholder: 'Select a city'
          }}
          multiple
          options={accounts}
          selection={this.state.selection}
          value={this.state.inputValue}
          variant="readonly"
        /> */}
        </IconSettings>
      </div>
    );
  }
}

export default App;
