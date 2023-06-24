import React from 'react';

const GameUserReview = ({ userReview }) => {
    return (
        <div>
            {userReview.map((review) => (
                <ul key={review.id}>
                    <li>{review.title}</li>
                    <li>{review.body}</li>
                    <li>{review.author}</li>
                    <li>Score: {review.score}</li>
                    <li>Reviewed: {review.date}</li>
                </ul>
            ))}
        </div>
    );
};

export default GameUserReview;