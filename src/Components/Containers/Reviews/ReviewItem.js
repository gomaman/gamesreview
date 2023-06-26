
import StyledReviewItem from './StyledReviewItem'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';

const ReviewItem = () => {

    const [review, setReview] = useState(null);
    useEffect(() => {
        axios.get(API_URL + `/games/?_embed=reviews`)
            .then(res => {
                const reviewsData = res.data;
                console.log(reviewsData)
                setReview(reviewsData.reviews[0]);
            })
            .catch(err => toast.error(err.message))
    }, []);



  return (
    <StyledReviewItem>
        

        
    </StyledReviewItem>
  )
}

export default ReviewItem