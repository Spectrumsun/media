import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { navigate, useRoutes } from 'hookrouter';
import routes from './router';




const NavBar = () => {
  const routeResult = useRoutes(routes);
  const [ currentUrl, setCurrentUrl ] = useState('Titles');

  useEffect(() => {
    const url = window.location.href;
    const path = url.split('/')[3]
    if(path !== 'series' || 'movies') {
      setCurrentUrl('Title')
    }
    setCurrentUrl(path)
  })
  return (
    <>
    <Wrapper>
    <Nav>
      <h1 onClick={() => navigate('/')}>DEMO Streaming</h1>
      <div> 
        <h4>Log in</h4>
        <h3>Start your free trial</h3>
      </div>
    </Nav>
    <Bar>
      <div>
        <h3>Popular {currentUrl} </h3>
      </div>
    </Bar>
    </Wrapper>
    {routeResult || <div>NoResource</div>}
    </>
  );
};

const Wrapper = styled.div`
  background: #0079FE;
`;

const Nav = styled.nav`
  margin: 0 auto;
  width: 70%;
  padding: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    h4 {
      margin-right: 20px;
    }
    h3 {
      background: #000000;
      padding: 10px;
    }
  }
`;


const Bar = styled.nav`
  background: #414141;
  color: #ffffff;
  justify-content: space-around;
  div {
    padding: 20px;
    margin: 0 auto;
    width: 70%;
  }
`


export default NavBar;