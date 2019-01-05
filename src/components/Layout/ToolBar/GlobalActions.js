import React from 'react';

const GlobalActions = () => {
  return (
    <li className="slds-global-actions__item">
      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
        <button
          className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action"
          aria-haspopup="true"
          title="Global Actions"
        >
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add" />
          </svg>
          <span className="slds-assistive-text">Global Actions</span>
        </button>
      </div>
    </li>
  );
};
export default GlobalActions;
