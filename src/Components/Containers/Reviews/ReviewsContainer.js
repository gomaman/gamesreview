
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';
import StyledReviewsContainer from "./StyledReviewsContainer";
import styled from "styled-components";


const ReviewCard = styled.div`
    background-color: rgb(41, 37, 37);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 10);

    &:hover {
        background-color: rgb(40, 48, 68);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li {
        margin-bottom: 10px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        margin-top: 10px;
    }

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .review-title {
        font-size: 25px;
        font-weight:bold;
        
    }
`;

const ReviewsContainer = () => {
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        axios.get(API_URL + `/reviews`)
            .then(res => {
                const reviewsData = res.data;
                setDataSet(reviewsData);
            })
            .catch(err => toast.error(err.message));
    }, []);

    if (!dataSet) {
        return (
            <h1>Loading...</h1>
        );
    } else {
        return (
            <StyledReviewsContainer>
                {dataSet.map((review) => (
                    <ReviewCard key={review.id}>
                        <ul>
                            <li className="review-title">{review.title}</li>
                            <li>{review.score}</li>
                            <li>
                                <p className="truncated-body">{review.body.substring(0, 60) + '... More'}</p>
                            </li>
                            <li><img src="https://assets-prd.ignimgs.com/2023/06/01/systemshock-blogroll-1685662034076.jpg?crop=16%3A9&width=282"></img></li>
                            <ul>
                                <li>{review.ageRating}</li>
                            </ul>
                            <ul>
                                <li>{review.date}</li>
                                <li>{review.author}</li>
                            </ul>
                        </ul>
                    </ReviewCard>
                ))}
            </StyledReviewsContainer>
        );
    }
};

//grizti prie sito style

export default ReviewsContainer;