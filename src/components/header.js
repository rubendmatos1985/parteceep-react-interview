import React from 'react';
import styled from 'styled-components';
import Filter from './filter';
const HeaderContainer = styled.header`
 font-size: 30px;
 background: #373c54;
 width: 100%;
 height: 70px;
 grid-area: header;
 color: white;
 display: flex;
 align-items: center;
 justify-content: space-between;
 font-weight: bold;
 font-family: 'Oxygen', sans-serif;

`;

const Title = styled.h3`
 margin-left: 1vw;
`;

const Header = (props) => (
  <HeaderContainer>
    <Title>
    Welcome to my Movies App
    </Title>
    <Filter/>
  </HeaderContainer>

)

export default Header;
