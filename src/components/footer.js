import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
grid-area: footer;
padding: 10px;
background: #373c54;
font-family: 'Oxygen', sans-serif;
color: white;
font-size:18px;
display: flex;
height: 100%;
justify-content: space-evenly;
align-items: center;
 
`;

const Footer = props =>
  <FooterContainer>
    <div>
    Copyright <i className="far fa-copyright"></i> Ruben Dario Matos 2019 
    </div>
    <div>
    Email: rubendmatos1985@gmail.com |
    Mobile: +33649718398
    </div>
  </FooterContainer>


export default Footer;