import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import MovieCard from '../MovieCard';

const sample = {
  title: "Wolf Creek",
  programType: "series",
  images:  {
    'Poster Art': {
            url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
            width: 1000,
            height: 1500
      }
  },
  releaseYear: 2016
};

const wrapper = shallow(<MovieCard data={sample} />);

describe('<MovieCard />', () => {

// it('should match the snapshot', () => {
//     expect(wrapper.html()).toMatchSnapshot();
//   });  

  it('should render 2 items', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

    it('title should match Wolf Creek', () => {
    expect(wrapper.find('p').text()).toEqual('Wolf Creek');
  });



});
