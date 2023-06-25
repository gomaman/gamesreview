import React from 'react';
import StyledNewsItem from './StyledNewsItem';
import { Link } from 'react-router-dom';

const NewsItem = ({ newsData }) => {
    const { title, body, author, date, thumbnail, } = newsData
    // console.log(title)
    // console.log(body)
    // console.log(author)
    // console.log(date)
    // console.log(thumbnail)
    return (
        <StyledNewsItem className="blog-container big">
            <Link to={`/news/${newsData.id}`} className="news-item-link">
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
            </Link>
        </StyledNewsItem>
    );
};

export default NewsItem;