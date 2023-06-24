import React from 'react';
import './PictureContainer.css';
import { Button2 } from './Button/Buttons';

const PictureContainer = ({ imageSrc, altText, linkText, linkUrl }) => {
  return (
    <div className="picture-container">
      <div className="picture-image-wrapper">
        <a href={linkUrl} className="picture-link"><Button2>{linkText}</Button2></a>
        <img src={imageSrc} alt={altText} className="picture-image" />
      </div>
    </div>
  );
};

export default PictureContainer;