import React from 'react';
import GlobalActions from './GlobalActions';
import HelpMenu from './HelpMenu';
import SetupMenu from './SetupMenu';
import Notifications from './Notifications';
import UserMenu from './UserMenu';

const Toolbar = () => {
  return (
    <div className="slds-global-header__item">
      <ul className="slds-global-actions">
        <GlobalActions />
        <HelpMenu />
        <SetupMenu />
        <Notifications />
        <UserMenu />
      </ul>
    </div>
  );
};
export default Toolbar;
