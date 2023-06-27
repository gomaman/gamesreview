import React from 'react';
import './GameContainer.css';
import styled from 'styled-components';

const TitleText = styled.p`
  background-color: darkgray;
  color: white;
  font-weight: bold;
  padding: 20px;
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