import React from 'react';
import StyledLargeNews from './StyledLargeNews'

const LargeNews = ({firstNews}) => {

  const {title, body, author, date, thumbnail,} = firstNews

  return (
    <StyledLargeNews className="blog-container big">
      <div className="blog-img-container">
        <img src={thumbnail} alt="Blog Image" />
      </div>
      <div className="main-blog-content-container">
        <h2>{title}</h2>
        <h3>{body}</h3>
        <div className="sideBlog-content">
          <p>{author}</p>
          <p>Release Date: June 1, 2023</p>
        </div>
      </div>
    </StyledLargeNews>
  );
};

export default LargeNews;