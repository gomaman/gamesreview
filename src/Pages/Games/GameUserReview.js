import { Button2 } from '../../Components/Containers/Button/Buttons';
import React from 'react';

const GameUserReview = ({ userReview, deleteHandler }) => {
    if (!userReview || userReview.length === 0) {
      return <p>No user reviews available.</p>;
    }
  
    return (
      <div>
        {userReview.map((review) => (
          <ul key={review.id}>
            <li>{review.title}</li>
            <li>{review.body}</li>
            <li>{review.author}</li>
            <li>Score: {review.score}</li>
            <li>Reviewed: {review.date}</li>
            <Button2 onClick={() => deleteHandler(review.id)}>Delete Review</Button2>
          </ul>
        ))}
      </div>
    );
  };
  
  export default GameUserReview;