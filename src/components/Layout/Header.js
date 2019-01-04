import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header
        className="slds-global-header_container"
        style={{ position: "static" }}
      >
        <div className="slds-global-header slds-grid slds-grid_align-spread">
          <div className="slds-global-header__item">
            <div className="slds-global-header__logo" />
          </div>
          <div className="slds-global-header__item slds-text-heading_large">
            Welcome to Penrod Weather!
          </div>
          <div className="slds-global-header__item">
            <ul className="slds-global-actions">
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
              <li className="slds-global-actions__item">
                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button
                    className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action"
                    aria-haspopup="true"
                    title="Help and Training"
                  >
                    <svg
                      className="slds-button__icon slds-global-header__icon"
                      aria-hidden="true"
                    >
                      <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#question" />
                    </svg>
                    <span className="slds-assistive-text">
                      Help and Training
                    </span>
                  </button>
                </div>
              </li>
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
                    <span className="slds-assistive-text">
                      no new notifications
                    </span>
                  </button>
                  <span aria-hidden="true" className="slds-notification-badge">
                    0
                  </span>
                </div>
              </li>
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
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
