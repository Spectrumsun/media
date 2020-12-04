import React from 'react';
import { shallow } from 'enzyme';
import { useQuery } from 'react-query';
import 'jest-styled-components';
import MediaContainer, { getRequest } from '../MediaContainer';


function useFetchData() {
  const { data } = useQuery('fetchData', () => getRequest());
  return data;
}


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

const wrapper = shallow(<MediaContainer type="series" />);

describe('<MovieCard />', () => {

// it('should match the snapshot', () => {
//     expect(wrapper.html()).toMatchSnapshot();
//   });  

  // it('should render 2 items', () => {
  //   expect(wrapper.find('img').length).toEqual(1);
  // });


});