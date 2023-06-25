import React from 'react';
import BlogContainer from '../../BlogContainer/BlogContainer';
import StyledLargeNews from './StyledLargeNews';

const LargeNews = () => {
    return (
      <StyledLargeNews>
        <div className="left-blog-container">
          <BlogContainer classes="big">
            <div className="blog-img-container">
              <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
            </div>
            <div className="main-blog-content-container">
              <h2>Blog Title</h2>
              <h3>News Short Body</h3>
              <div className="sideBlog-content">
                <p>Author</p>
                <p>Release Date: June 1, 2023</p>
              </div>
            </div>
          </BlogContainer>
        </div>
      </StyledLargeNews>
    );
  };
  
  export default LargeNews;