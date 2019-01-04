import React, { Component } from "react";
import "./App.css";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import Header from "./components/Layout/Header";
import DdMenu from "./components/DdMenu";
import { DataTable, DataTableColumn } from "@salesforce/design-system-react";
import isEmpty from "./functions/isEmpty";
import toString from "./functions/toString";
import axios from "axios";

const KEY = "a241c5fc2c73eae33882948459c495ef";

const columns = [
  <DataTableColumn key="name" label="City" property="name" width="6em" />,

  <DataTableColumn
    key="currentTemp"
    label="Current Temperature"
    property="temp"
    width="5em"
  />,

  <DataTableColumn
    key="minTemp"
    label="Min Temperature"
    property="temp_min"
    width="5em"
  />,

  <DataTableColumn
    key="maxTemp"
    label="Max Temperature"
    property="temp_max"
    width="5em"
  />
];

class App extends Component {
  constructor(props) {
    super(props);

    this.setSelection = this.setSelection.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.resetWeather = this.resetWeather.bind(this);

    this.state = {
      inputValue: "",
      selection: {
        label: "Please choose a city"
      },
      weather: []
    };
  }

  getWeather = () => {
    this.resetWeather();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.selection.label
        }&units=imperial&appid=${KEY}`
      )
      .then(res => {
        //   console.log(res.data);
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
          {/* <GlobalHeader style={{ position: "static" }} /> */}
          <Header />
          <ul className="slds-button-group-row slds-m-top_small">
            <li className="slds-button-group-item">
              <DdMenu
                onSelection={this.setSelection}
                selection={this.state.selection}
              />
            </li>
            <li className="slds-button-group-item">
              {this.state.selection.label === "Please choose a city" ? null : (
                <button
                  className="slds-button slds-button_neutral"
                  onClick={() => this.getWeather()}
                >
                  Submit
                </button>
              )}
            </li>
          </ul>
          <div>
            {isEmpty(this.state.weather) ? null : (
              <DataTable
                className="slds-m-top_small"
                items={toString(this.state.weather)}
                id="DataTableExample-1-default"
                fixedLayout
              >
                {columns}
              </DataTable>
            )}
          </div>
        </IconSettings>
      </div>
    );
  }
}

export default App;
