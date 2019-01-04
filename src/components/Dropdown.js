import React, { Component } from 'react';
import { Combobox } from '@salesforce/design-system-react';
// import Icon from '@salesforce/design-system-react/components/icon';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
// import icons from '../assets/icons/';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selection: [],
      accounts: [
        {
          id: '1',
          label: 'Milwaukee',
          subTitle: ''
        },
        {
          id: '2',
          label: 'Minneapolis',
          subTitle: ''
        },
        {
          id: '3',
          label: 'Chicago',
          subTitle: ''
        },
        {
          id: '4',
          label: 'Dallas',
          subTitle: ''
        }
      ]
    };
  }

  render() {
    return (
      <Combobox
        id="cities-comboBox"
        labels={{
          label: 'Select a city',
          placeholder: ''
        }}
        events={{
          onSelect: (event, data) => {
            this.setState({
              inputValue: '',
              selection: [data.selection.pop()]
            });
          }
        }}
        multiple
        options={this.state.accounts}
        selection={this.state.selection}
        value={this.state.inputValue}
        variant="readonly"
      />
    );
  }
}

export default Dropdown;
