import React from 'react';
import styled from 'styled-components';

const I = styled.i`
   color: white; 
   font-size: 20px;
   cursor: pointer;
`;


const Icon = ({className, onClick}) =>(
  <I 
  onClick={ onClick }
  className={className}></I>
)

export default Icon;