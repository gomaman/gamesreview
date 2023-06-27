import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../Config/LinksConfig';
import StyledNewsItem from '../../Components/Containers/News/StyledNewsItem';

const HomeNewsContainer = () => {
    const [reviewsData, setReviewsData] = useState()

    useEffect(() => {
        axios.get(API_URL + `/reviews?_limit=5`)
            .then(res => {
                const reviewsData = res.data;
                console.log(reviewsData)
                setReviewsData(reviewsData);
            })
            .catch(err => toast.error(err.message))
    }, []);

  if (!reviewsData) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledNewsItem>
      {reviewsData.map(data => {
        return (
          <div key={data.id} className="single-news-container">
            <div className="single-news-content">
              <h2 className="news-title">{data.title}</h2>
              <p className="news-body">{data.body}</p>
              <p className="news-date">Release Date: {data.date}</p>
            </div>
          </div>
        );
      })}
    </StyledNewsItem>
  );
};

export default HomeNewsContainer;

