import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../NavBar';

const wrapper = shallow(<Nav />);

describe('<Nav />', () => {
  // it('should match the snapshot', () => {
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  it('should have a h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should have a h4', () => {
    expect(wrapper.find('h4').length).toEqual(1);
  });

  it('text should match log in', () => {
    expect(wrapper.find('h4').text()).toEqual('Log in');
  });
});
