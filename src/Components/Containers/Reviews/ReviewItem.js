import React, { useState } from 'react'
import StyledReviewItem from './StyledReviewItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { API_URL } from '../../../Config/LinksConfig';
import { Container } from '@mui/material';

const ReviewItem = () => {

    const { id } = useParams();

    const [reviewsData, setReviewsData] = useState({})

    useEffect(() => {
        axios.get(API_URL + `/reviews/${id}?_expand=game`)
            .then(res => {
                const reviewsData = res.data;
                setReviewsData(reviewsData);
            })
            .catch(err => toast.error(err.message))
    }, [id]);


    const { title, body, author, date, score, } = reviewsData



    if (!reviewsData.game) {
        return <div>Loading...</div>;
    }


    return (
        <Container sx={{ margin: '45px auto' }}>
            <StyledReviewItem>
                    <div className="review-content">
                    <h2 className="review-title">{title}</h2>
                        <p className="review-body">{body}</p>
                        <p className="review-author">Author: {author}</p>
                        <p className="review-date">Release Date: {date}</p>
                    </div>

                    <div className="review-content">
                        <h2 className="review-game-title">Title: {reviewsData.game.title}</h2>
                        <p className="review-game-release-date">Release Date: {reviewsData.game.releaseDate}</p>
                        <div className="review-score">
                            <p className="review-score">Score</p>
                            <p className="review-score">{score}</p>
                        </div>
                    </div>
            </StyledReviewItem>
        </Container>
    );
};

export default ReviewItem

