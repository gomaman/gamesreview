import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../Config/LinksConfig';
import StyledNewsItem from '../../Components/Containers/News/StyledNewsItem';
import { Link } from 'react-router-dom';

const HomeNewsContainer = () => {
    const [newsData, setReviewsData] = useState();

    useEffect(() => {
        axios
            .get(API_URL + `/news?_limit=6`)
            .then(res => {
                const newsData = res.data;
                setReviewsData(newsData);
            })
            .catch(err => toast.error(err.message));
    }, []);

    if (!newsData) {
        return <h1>Loading...</h1>;
    }

    return (
        <StyledNewsItem>
          {newsData.map(data => (
            <div key={data.id} className="single-news-container">
              <div className="single-news-img-container">
                <Link to={`/news/${data.id}`} key={data.id}>
                  <img src={data.thumbnail} alt="News Image" />
                </Link>
              </div>
    
              <div className="single-news-content">
                <h2 className="news-title">{data.title}</h2>
                <p className="news-body">{data.body}</p>
                <p className="news-author">Author: {data.author}</p>
                <p className="news-date">Release Date: {data.date}</p>
              </div>
            </div>
          ))}
        </StyledNewsItem>
      );
    };
    
    export default HomeNewsContainer;