import React from 'react';
import { DataTableColumn } from '@salesforce/design-system-react';

const Columns = [
  <DataTableColumn key="name" label="City" property="name" width="6em" />,

  <DataTableColumn
    key="currentTemp"
    label="Current Temperature (f)"
    property="temp"
    width="5em"
  />,

  <DataTableColumn
    key="minTemp"
    label="Min Temperature (f)"
    property="temp_min"
    width="5em"
  />,

  <DataTableColumn
    key="maxTemp"
    label="Max Temperature (f)"
    property="temp_max"
    width="5em"
  />
];

export default Columns;
