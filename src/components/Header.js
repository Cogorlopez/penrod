import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="slds-global-header_container">
        <a
          href="javascript:void(0);"
          className="slds-assistive-text slds-assistive-text_focus"
        >
          Skip to Navigation
        </a>
        <a
          href="javascript:void(0);"
          className="slds-assistive-text slds-assistive-text_focus"
        >
          Skip to Main Content
        </a>
        <div className="slds-global-header slds-grid slds-grid_align-spread">
          <div className="slds-global-header__item">
            <div className="slds-global-header__logo" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
