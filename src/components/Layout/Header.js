import React, { Component } from 'react';
import Logo from './Logo';
import Title from './Title';
import ToolbarContainer from './ToolbarContainer';

export default class Header extends Component {
  render() {
    return (
      <header
        className="slds-global-header_container"
        style={{ position: 'static' }}
      >
        <div className="slds-global-header slds-grid slds-grid_align-spread">
          <Logo />
          <Title />
          <ToolbarContainer />
        </div>
      </header>
    );
  }
}
