import React from 'react';

const UserMenu = () => {
  return (
    <li className="slds-global-actions__item">
      <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
        <button
          className="slds-button slds-global-actions__avatar slds-global-actions__item-action"
          title="person name"
          aria-haspopup="true"
        >
          <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
            <img
              alt="Person name"
              src="/assets/images/avatar2.jpg"
              title="User avatar"
            />
          </span>
        </button>
      </div>
    </li>
  );
};

export default UserMenu;
