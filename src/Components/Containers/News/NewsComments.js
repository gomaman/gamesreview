import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../../Config/LinksConfig';
import CommentCard from '../SingleNews/SingleCommentCard';
import CommentAuthor from './CommentAuthor';

const NewsComments = ({ commentsUpdated, onEditComment  }) => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState({});
    const [comments, setComments] = useState([]);
    const [commentStatus, setCommentStatus] = useState(false)

    useEffect(() => {
        axios
            .get(API_URL + `/news/${id}?_embed=comments`)
            .then((res) => {
                const newsData = res.data;
                setNewsData(newsData);
                setComments(newsData.comments);
            })
            .catch((err) => toast.error(err.message));
    }, [commentsUpdated, commentStatus]);

    const deleteHandler = (CommentId) => {
        axios
            .delete(API_URL + `/comments/${CommentId}`)
            .then((res) => {
                toast.success('Comment Deleted');
                setCommentStatus(true)
            })
            .catch((err) => toast.error(err.message));
    };

    const editHandler = (comment) => {
        const {body, date, id, newsId, userId} = comment

        const beforeEditComment = {
            newsId,
            userId,
            body,
            date,
            id,
        }
        onEditComment(beforeEditComment)
    }
    return (
        <>
            {comments.map((comment) => (
                <CommentCard key={comment.id}>
                    <CommentAuthor userId={comment.userId} />
                    <p>Date: {comment.date}</p>
                    <h3>{comment.body}</h3>
                    <button className="delete-button" onClick={() => deleteHandler(comment.id)}>Delete</button>
                    <button className="edit-button" onClick={() => editHandler(comment)}>Edit</button>
                </CommentCard>
            ))}

            <ToastContainer></ToastContainer>
        </>
    );
}


export default NewsComments;