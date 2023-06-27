import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SingleNewsItem from '../../Components/Containers/SingleNews/SingleNewsComponent';
import NewsComments from '../../Components/Containers/News/NewsComments';
import AddNewsComment from '../../Components/Containers/News/AddNewsComment';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleNewsPage = () => {

  const [commentsUpdated, setCommentsUpdated] = useState(false);
  const [beforeEditComment, setBeforeEditComment] = useState();

  const handleCommentSubmit = () => {
    setCommentsUpdated(!commentsUpdated);
  };

  const handleEditComment = (comment) => {
    setBeforeEditComment(comment);
  };

  useEffect(() => {
  }, [beforeEditComment]);


  return (
    <Container sx={{ margin: '45px auto' }}>
      <SingleNewsItem />
      <NewsComments commentsUpdated={commentsUpdated} onEditComment={handleEditComment} />
      <AddNewsComment handleCommentSubmit={handleCommentSubmit} beforeEditComment={beforeEditComment}/>
    </Container>
  );

}

export default SingleNewsPage;