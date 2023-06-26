
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
                            <h2>{review.title}</h2>
                            <li>{review.score}</li>
                            <li>{review.body}</li>
                            <li>{review.ageRating}</li>
                            <li>{review.date}</li>
                            <li>{review.author}</li>
                        </ul>
                    </ReviewCard>
                ))}
            </StyledReviewsContainer>
        );
    }
};

export default ReviewsContainer;