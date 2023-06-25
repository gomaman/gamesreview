import React from 'react';
import StyledLargeNews from './StyledLargeNews'
import { Link } from 'react-router-dom';

const LargeNews = ({ firstNews }) => {

  const { title, body, author, date, thumbnail, } = firstNews

  return (
    <Link to={`/news/${firstNews.id}`} key={firstNews.id} className="big-news-link">
      <StyledLargeNews className="blog-container big">
        <div className="blog-img-container">
          <img src={thumbnail} alt="Blog Image" />
        </div>
        <div className="main-blog-content-container">
          <h2>{title}</h2>
          <h3>{body}</h3>
          <div className="sideBlog-content">
            <p>Author: {author}</p>
            <p>Published:{date}</p>
          </div>
        </div>
      </StyledLargeNews>
    </Link>
  );
};

export default LargeNews;