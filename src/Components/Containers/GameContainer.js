import React from 'react';
import './GameContainer.css';
import { Button2 } from './Button/Buttons';

const GameContainer = ({ children, buttonText, titleText }) => {
  return (
    <div className="game-container">
      {children}
      <Button2 className="game-button">{buttonText}</Button2>
      <p>{titleText}</p>
    </div>
  );
};

export default GameContainer;