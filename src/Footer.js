import React from 'react';
import styled from 'styled-components';
import facebook from './assets/facebook-white.svg'
import instagram from './assets/instagram-white.svg'
import twitter from './assets/twitter-white.svg'
import AppleStore from './assets/app-store.svg';
import GoogleStore from './assets/play-store.svg';
import WindowsStore from './assets/windows-store.svg';

const Footer = () => (
  <FooterStyle>
    <div className="footer-container">
    <ul>
      <li>Home</li>
      <li style={{ margin: '0px 10px 0px 10px'}}> | </li>
      <li>Terms and Conditions</li>
      <li style={{ margin: '0px 10px 0px 10px'}}> | </li>
      <li>Privacy Policy</li>
      <li style={{ margin: '0px 10px 0px 10px'}}> | </li>
      <li>Collection Statement</li>
      <li style={{ margin: '0px 10px 0px 10px'}}> | </li>
      <li>Help</li>
      <li style={{ margin: '0px 10px 0px 10px'}}> | </li>
      <li>Manage Account</li>
    </ul>
    <p>Copyright &#xa9; DEMO Streaming. All Right Reserved</p>
    <div className="footer-cover">
        <div className="social-media">
        <img 
          src={facebook} 
          alt="facebook"
          width= '3%'
          style={{ marginRight: '25px' }}
        />
        <img 
          src={twitter} 
          alt="twitter"
          width= '6%'
          style={{ marginRight: '25px' }}
        />
        <img 
          src={instagram} 
          alt="instagram"
          width= '6%'
          style={{ marginRight: '25px' }}
        />
        
    </div>
    <div className="app-store">
        <img 
          src={AppleStore} 
          alt="Apple Store"
          width= '25%'
          style={{ marginRight: '20px' }}
        />
        <img 
          src={GoogleStore} 
          alt="Google Store"
          width= '25%'
          style={{ marginRight: '20px' }}
        />
        <img 
          src={WindowsStore} 
          alt="Windows Store"
          width= '20%'
        />
      </div>
    </div>
  </div>
  </FooterStyle>
)

export default Footer;

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #1E1E1E;
  color: #ffffff;
  padding: 50px;
  
  .footer-container {
    margin: 0 auto;
    width: 70%;
  }
  ul {
    color: #C4C6C5;
    list-style-type: none;
    display: flex;
    margin-bottom: 20px;
  }
  p{
    color: #949DA6;
  }

  .footer-cover {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;