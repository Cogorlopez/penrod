import React from 'react';
import DdMenu from './DdMenu';
const DropDown = props => {
  return (
    <li className="slds-button-group-item">
      <DdMenu onSelection={props.onSelect} selection={props.selection} />
    </li>
  );
};

export default DropDown;
