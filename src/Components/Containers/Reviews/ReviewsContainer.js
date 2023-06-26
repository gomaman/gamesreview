
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';
import StyledReviewsContainer from "./StyledReviewsContainer";

const ReviewsContainer = () => {

    const [dataSet, setDataSet] = useState([]);
    useEffect(() => {
        axios.get(API_URL + `/games/?_embed=reviews`)
            .then(res => {
                const reviewsData = res.data;
                setDataSet(reviewsData);
                // editui reiks setReview(reviewsData.reviews[0]);
            })
            .catch(err => toast.error(err.message))
    }, []);

    if (!dataSet) {
        return (
            <h1>Loading...</h1>
        )
    } else

        return (
            <StyledReviewsContainer>
                {dataSet.map((dataItem) => (
                    <div key={dataItem.id}>
                        <ul>
                            {console.log(dataItem.reviews[0])}
                            <li>{dataItem.reviews[0].ageRating}</li>
                            <li>{dataItem.reviews[0].author}</li>
                            <li>{dataItem.reviews[0].body}</li>
                            <li>{dataItem.reviews[0].date}</li>
                            <li>{dataItem.reviews[0].score}</li>
                            <li>{dataItem.reviews[0].title}</li>
                        </ul>
                    </div>
                ))}
            </StyledReviewsContainer>
        )
}

export default ReviewsContainer