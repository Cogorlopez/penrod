import React, { Component } from "react";
import { Dropdown } from "@salesforce/design-system-react";
import { DropdownTrigger } from "@salesforce/design-system-react";
import { Button } from "@salesforce/design-system-react";

const DdMenu = props => {
  return (
    <Dropdown
      tabIndex="-1"
      align="right"
      options={[
        { label: "Milwaukee", value: "Milwaukee" },
        { label: "Chicago", value: "Chicago" },
        { label: "Minneapolis", value: "Minneapolis" },
        { label: "Dallas", value: "Dallas" }
      ]}
      onSelect={event => props.onSelection({ event })}
    >
      <DropdownTrigger>
        <Button
          iconCategory="utility"
          iconName="down"
          iconPosition="right"
          label={props.selection.label}
        />
      </DropdownTrigger>
    </Dropdown>
  );
};

export default DdMenu;
