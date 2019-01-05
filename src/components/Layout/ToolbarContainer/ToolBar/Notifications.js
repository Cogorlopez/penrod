import React from 'react';

const Notifications = () => {
  return (
    <li className="slds-global-actions__item">
      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
        <button
          className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action"
          title="no new notifications"
          aria-live="assertive"
          aria-atomic="true"
        >
          <svg
            className="slds-button__icon slds-global-header__icon"
            aria-hidden="true"
          >
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#notification" />
          </svg>
          <span className="slds-assistive-text">no new notifications</span>
        </button>
        <span aria-hidden="true" className="slds-notification-badge">
          0
        </span>
      </div>
    </li>
  );
};
export default Notifications;
