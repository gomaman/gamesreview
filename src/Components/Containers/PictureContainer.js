import React from 'react';
import './PictureContainer.css';

const PictureContainer = ({ imageSrc, altText, linkText, linkUrl }) => {
  return (
    <div className="picture-container">
      <div className="picture-image-wrapper">
        <a href={linkUrl} className="picture-link">{linkText}</a>
        <img src={imageSrc} alt={altText} className="picture-image" />
      </div>
    </div>
  );
};

export default PictureContainer;