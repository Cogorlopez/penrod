import React, { Component } from 'react';
import './App.css';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import axios from 'axios';
import DropDown from './components/Body/ButtonGroup/DropDown';
import SubmitButton from './components/Body/ButtonGroup/SubmitButton';
import Header from './components/Layout/Header';
import WeatherTable from './components/Body/WeatherDisplay/WeatherTable';
import isEmpty from './functions/isEmpty';

const KEY = 'a241c5fc2c73eae33882948459c495ef';

class App extends Component {
  constructor(props) {
    super(props);

    this.setSelection = this.setSelection.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.resetWeather = this.resetWeather.bind(this);

    this.state = {
      inputValue: '',
      selection: {
        label: 'Please choose a city'
      },
      weather: []
    };
  }

  getWeather = () => {
    //Clears previous city data when fetching new city
    this.resetWeather();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.selection.label
        }&units=imperial&appid=${KEY}`
      )
      .then(res => {
        //Doing this to move the main properites up to the top level
        //Needed for correctly getting data to DataTable
        let obj = res.data.main;
        let merged = { ...res.data, ...obj };

        this.setState({ weather: [...this.state.weather, merged] });
      })
      .catch(err => console.log(err));
  };

  setSelection(selectedItem) {
    this.setState({
      selection: selectedItem.event
    });
  }

  resetWeather() {
    this.setState({ weather: [] });
  }

  render() {
    return (
      <div className="App">
        <IconSettings iconPath="/assets/icons/">
          <Header />
          <ul className="slds-button-group-row slds-m-top_small">
            <DropDown
              onSelect={this.setSelection}
              selection={this.state.selection}
            />
            <SubmitButton
              handleClick={this.getWeather}
              selection={this.state.selection}
            />
          </ul>
          {isEmpty(this.state.weather) ? null : (
            <WeatherTable weather={this.state.weather} />
          )}
        </IconSettings>
      </div>
    );
  }
}

export default App;
