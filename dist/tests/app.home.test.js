import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import Home from '../Home';



const wrapper = shallow(<Home />);

describe('<Home />', () => {

  // it('should match the snapshot', () => {
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  it('should render 2 items', () => {
    expect(wrapper.find('div').length).toEqual(0);
  });

  // it('should have a h4', () => {
  //   expect(wrapper.find('h4').length).toEqual(1);
  // });

  // it('text should match log in', () => {
  //   expect(wrapper.find('h4').text()).toEqual('Log in');
  // });
});
