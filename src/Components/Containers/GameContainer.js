import React from 'react';
import './GameContainer.css'; // Create a CSS file for styling

const GameContainer = ({ children }) => {
  return <div className="game-container">{children}</div>;
};

export default GameContainer;