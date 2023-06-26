import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../../Config/LinksConfig';
import CommentCard from '../SingleNews/SingleCommentCard';
import CommentAuthor from './CommentAuthor';

const NewsComments = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    axios
      .get(API_URL + `/news/${id}?_embed=comments`)
      .then((res) => {
        const newsData = res.data;
        setNewsData(newsData);
        setComments(newsData.comments);
      })
      .catch((err) => toast.error(err.message));
  }, [id]);

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment.id}>
          <h3>{comment.body}</h3>
          <CommentAuthor userId={comment.userId} />
          <p>Date: {comment.date}</p>
        </CommentCard>
      ))}
    </>
  );
};


export default NewsComments;