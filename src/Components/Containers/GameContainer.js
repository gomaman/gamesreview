import React from 'react';
import './GameContainer.css';
import { Button2 } from '../BlogContainer/Button/Buttons';
import styled from 'styled-components';

const TitleText = styled.p`
  color: black;
  font-weight: bold;
  font-size: 30px;
`;

const GameContainer = ({ children, buttonText, titleText }) => {
  return (
    <div className="game-container">
      {children}
      <TitleText>{titleText}</TitleText>
    </div>
  );
};

export default GameContainer;