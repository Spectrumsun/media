import React from 'react';
import styled from 'styled-components';
import { navigate } from 'hookrouter';
import placeHolder from './assets/placeholder.png';


const Card = ({ type, index }) => {
  return (
    <CardStyle onClick={() => navigate(`/${type.toLowerCase()}`)} key={index}>
      <div key={index}>
      <img src={placeHolder} alt="placeHolder" />
      <h4>{type.toUpperCase()}</h4>
      </div>
      <p>Popular {type}</p>
    </CardStyle>
  );
}


const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;
  div {
    background: #000000;
    height: 200px;
    position: relative;
    width: 70%;
    display: flex;
    justify-content: center;

    h4 {
      text-align: center;
      color: white;
      font-size: 30px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 50%; 
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  p {
    margin-top: 20px;
    color: #3E261C;
  }
  

`;

export default Card;
