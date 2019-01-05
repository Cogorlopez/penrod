import React from 'react';
import DdMenu from './DdMenu';

const ButtonGroup = () => {
  return (
    <ul className="slds-button-group-row slds-m-top_small">
      <li className="slds-button-group-item">
        <DdMenu
          onSelection={this.setSelection}
          selection={this.state.selection}
        />
      </li>
      <li className="slds-button-group-item">
        {this.state.selection.label === 'Please choose a city' ? null : (
          <button
            className="slds-button slds-button_neutral"
            onClick={() => this.getWeather()}
          >
            Submit
          </button>
        )}
      </li>
    </ul>
  );
};

export default ButtonGroup;
