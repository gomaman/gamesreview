import React, { useState } from 'react'
import StyledNewsItem from '../News/StyledNewsItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { API_URL } from '../../../Config/LinksConfig';

const SingleNewsItem = () => {

    const { id } = useParams();

    const [newsData, setNewsData] = useState({})

    useEffect(() => {
        axios.get(API_URL + `/news/${id}`)
            .then(res => {
                const newsData = res.data;
                setNewsData(newsData);

            })
            .catch(err => toast.error(err.message))
    }, [id]);


    const { title, body, author, date, thumbnail} = newsData

    return (
        <StyledNewsItem>
            <div className="single-news-img-container">
                <img src={thumbnail} alt="News Image" />
            </div>
            <div className="single-news-content">
                <h2 className="news-title">{title}</h2>
                <p className="news-body">
                    {body}
                </p>
                <p className="news-author">Author: {author}</p>
                <p className="news-date">Release Date: {date}</p>
            </div>
        </StyledNewsItem>
    );
};

export default SingleNewsItem