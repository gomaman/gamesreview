import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../Config/LinksConfig';
import { Button2 } from '../../Components/Containers/Button/Buttons';
import { toast } from 'react-toastify';

const GameUserReview = ({ userReview, deleteHandler, editSaveHandler }) => {
    const [editedReview, setEditedReview] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const editPostHandler = (review) => {
        setEditedReview(review);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`${API_URL}/userReviews/${editedReview.id}`, editedReview)
            .then((response) => {
                const updatedUserReview = [...userReview];
                const editedIndex = updatedUserReview.findIndex(
                    (review) => review.id === editedReview.id
                );

                updatedUserReview[editedIndex] = editedReview;

                console.log(updatedUserReview[editedIndex]);
                editSaveHandler()

                // setEditedReview(null);
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div>
            {userReview.map((review) => (
                <div key={review.id}>
                    {editedReview && editedReview.id === review.id ? (
                        <form onSubmit={handleEditSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={editedReview.title}
                                    onChange={(e) =>
                                        setEditedReview({ ...editedReview, title: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="body">Body:</label>
                                <textarea
                                    id="body"
                                    value={editedReview.body}
                                    onChange={(e) =>
                                        setEditedReview({ ...editedReview, body: e.target.value })
                                    }
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="author">Author:</label>
                                <input
                                    type="text"
                                    id="author"
                                    value={editedReview.author}
                                    onChange={(e) =>
                                        setEditedReview({ ...editedReview, author: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="score">Score:</label>
                                <input
                                    type="number"
                                    id="score"
                                    min="1"
                                    max="10"
                                    value={editedReview.score}
                                    onChange={(e) =>
                                        setEditedReview({ ...editedReview, score: e.target.value })
                                    }
                                />
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    ) : (
                        <>
                            <ul>
                                <li>Title: {review.title}</li>
                                <li>Body: {review.body}</li>
                                <li>Author: {review.author}</li>
                                <li>Score: {review.score}</li>
                            </ul>
                            <Button2 onClick={() => editPostHandler(review)}>Edit</Button2>
                            <Button2 onClick={() => {
                                deleteHandler(review.id)
                                editSaveHandler(true)
                                }}>
                                Delete
                            </Button2>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GameUserReview;