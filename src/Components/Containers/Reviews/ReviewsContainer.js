
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';
import StyledReviewsContainer from "./StyledReviewsContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledFormComponent from "./GameReviewForm";
import ReviewCard from "./StyledReviewCard";

const NoReviewsMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

const ReviewsContainer = () => {
    const [dataSet, setDataSet] = useState([]);
    const [reviewStatus, setReviewStatus] = useState(false)
    const [newReview, setNewReview] = useState(false)

    useEffect(() => {
        axios.get(API_URL + `/reviews`)
            .then(res => {
                const reviewsData = res.data;
                setDataSet(reviewsData);
            })
            .catch(err => toast.error(err.message));
    }, [reviewStatus, newReview]);

    const deleteHandler = (ReviewId) => {
        axios
            .delete(API_URL + `/reviews/${ReviewId}`)
            .then((res) => {
                toast.success('Review Deleted');
                setReviewStatus(true)
            })
            .catch((err) => toast.error(err.message));
    };

    const newReviewHandler = () => {
        setNewReview(!newReview)
    };

    if (!dataSet) {
        return <h1>Loading...</h1>;
      }
    
      if (dataSet.length < 1) {
        return (
          <>
            <StyledReviewsContainer />
            <NoReviewsMessage>No reviews yet</NoReviewsMessage>
          </>
        );
      }


        return (
            <>
                <StyledReviewsContainer>
                    {dataSet.map((review) => (
                        <ReviewCard key={review.id}>
                            <Link key={review.id} to={`/reviews/${review.id}`} className="news-item-link">
                                <ul>
                                    <li className="review-title">{review.title}</li>
                                    <li>{review.score}</li>
                                    <li>
                                        <p className="truncated-body">{review.body.substring(0, 60) + '... More'}</p>
                                    </li>
                                    <li><img src="https://assets-prd.ignimgs.com/2023/06/01/systemshock-blogroll-1685662034076.jpg?crop=16%3A9&width=282"></img></li>
                                    <li>{review.ageRating}</li>
                                    <li>{review.date}</li>
                                    <li>{review.author}</li>
                                </ul>
                            </Link>
                            <button className="delete-button" onClick={() => deleteHandler(review.id)}>Delete</button>
                        </ReviewCard>
                    ))}
                </StyledReviewsContainer>

                <StyledFormComponent newReviewHandler={newReviewHandler} />
            </>
        );
    }


export default ReviewsContainer;