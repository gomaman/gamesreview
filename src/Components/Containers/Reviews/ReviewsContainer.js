
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';
import StyledReviewsContainer from "./StyledReviewsContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledFormComponent from "./GameReviewForm";



const ReviewCard = styled.div`
    background-color: rgb(41, 37, 37);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 10);
    position: relative;

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
    a.news-item-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }

  

  .delete-button {
    background-color: rgb(255,255,255);
    color: #000;
    border: none;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 10px;
  }
  

`;

const ReviewsContainer = () => {
    const [dataSet, setDataSet] = useState([]);
    const [reviewStatus, setReviewStatus] = useState(false)

    useEffect(() => {
        axios.get(API_URL + `/reviews`)
            .then(res => {
                const reviewsData = res.data;
                setDataSet(reviewsData);
            })
            .catch(err => toast.error(err.message));
    }, [reviewStatus]);

    const deleteHandler = (ReviewId) => {
        axios
            .delete(API_URL + `/reviews/${ReviewId}`)
            .then((res) => {
                toast.success('Review Deleted');
                setReviewStatus(true)
            })
            .catch((err) => toast.error(err.message));
    };

    if (!dataSet) {
        return (
            <h1>Loading...</h1>
        );
    } else {
        return (
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

                <StyledFormComponent />
            </StyledReviewsContainer>
        );
    }
};


export default ReviewsContainer;