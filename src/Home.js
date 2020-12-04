import React from 'react';
import styled from 'styled-components';
import CardStyle from './Card';
import Footer from './Footer';

const types = ['series', 'movies'];

const Home = () => {
  return (
    <>
      <HomeWrapper>
      {
        types.map((type) => <CardStyle type={type}/>)
      }
      </HomeWrapper>
      <Footer />
    </>
  );
}


const HomeWrapper = styled.div`
  display: flex;
  margin: 70px auto;
  width: 70%;
`;

export default Home;