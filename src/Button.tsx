import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.4rem;
  font-family: 'Julius Sans One', 'Noto Sans KR', sans-serif;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  transition: background-color 0.2s linear, color 0.2s linear;
  
  &:hover {
    background-color: #DEAAFF;
    color: #ffffff;
  }
  
  &:focus {
    outline: 2px #DEAAFF;
    outline-offset: 2px;
  }
`;


export default styled(Button)`
  border: none;
  color: whitesmoke;
  background-color: #627CD0;
`;