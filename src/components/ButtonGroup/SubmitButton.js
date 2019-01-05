import React from 'react';

const SubmitButton = props => {
  return (
    <li className="slds-button-group-item">
      {props.selection.label === 'Please choose a city' ? null : (
        <button
          className="slds-button slds-button_neutral"
          onClick={props.handleClick}
        >
          Submit
        </button>
      )}
    </li>
  );
};

export default SubmitButton;
