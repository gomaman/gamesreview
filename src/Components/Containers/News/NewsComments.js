
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../../Config/LinksConfig';
import CommentCard from '../SingleNews/SingleCommentCard';

const NewsComments = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios
      .get(API_URL + `/news/${id}?_embed=comments`)
      .then((res) => {
        const newsData = res.data;
        setNewsData(newsData);
        setComments(newsData.comments);
        if (newsData.comments.length > 0) {
          setUserId(newsData.comments[0].userId);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [id]);

  useEffect(() => {
    if (userId) {
      axios
        .get(API_URL + `/users/${userId}?_embed=comments`)
        .then((res) => {
          const userData = res.data;
          console.log(userData)
          setUsername(userData.username);
        })
        .catch((err) => toast.error(err.message));
    }
  }, [userId]);

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment.id}>
          <h3>{comment.body}</h3>
          <p>Author: {username}</p>
          <p>Date: {comment.date}</p>
        </CommentCard>
      ))}
    </>
  );
};

export default NewsComments;
