import React from 'react';
import { DataTable } from '@salesforce/design-system-react';
import toString from '../../functions/toString';

import Columns from './Columns';

const WeatherTable = props => {
  return (
    <div className="slds-m-top_small">
      <DataTable
        className="slds-m-top_small"
        items={toString(props.weather)}
        id="DataTableExample-1-default"
        fixedLayout
      >
        {Columns}
      </DataTable>
    </div>
  );
};

export default WeatherTable;
