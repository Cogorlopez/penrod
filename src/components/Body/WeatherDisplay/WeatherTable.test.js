import React from 'react';
import TestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherTable from './WeatherTable';

configure({ adapter: new Adapter() });

var weather = [];
weather.push({
  id: '5263045',
  name: 'Milwaukee',
  cod: '200',
  temp: '31.28',
  pressure: '1007',
  humidity: '75',
  temp_min: '26.6',
  temp_max: '35.06'
});

it('renders correctly when there is a weather object passed to it', () => {
  const tbl = TestRenderer.create(shallow(<WeatherTable weather={weather} />));

  expect(tbl).toMatchSnapshot();
});
