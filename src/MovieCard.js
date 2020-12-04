import React from 'react';
import styled from 'styled-components';
import placeHolder from './assets/placeholder.png';


const MovieCard = ({ data }) => {
  const url = data.images['Poster Art'].url
  return (
    <Cover>
      <img src={url} alt="movie" />
      <p>{data.title}</p>
    </Cover>
  );
}



const Cover = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  p {
    margin-top: 10px;
    font-size: 10px;
  }

`;

export default MovieCard;
