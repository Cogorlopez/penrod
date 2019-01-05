import React from 'react';

const SetupMenu = () => {
  return (
    <li className="slds-global-actions__item">
      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
        <button
          className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action"
          aria-haspopup="true"
          title="Setup"
        >
          <svg
            className="slds-button__icon slds-global-header__icon"
            aria-hidden="true"
          >
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#setup" />
          </svg>
          <span className="slds-assistive-text">Setup</span>
        </button>
      </div>
    </li>
  );
};

export default SetupMenu;
