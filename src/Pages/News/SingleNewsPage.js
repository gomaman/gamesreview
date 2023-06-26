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
    console.log(comment)
    setBeforeEditComment(comment);
    console.log(beforeEditComment)
  };

  useEffect(() => {
  }, [beforeEditComment]);


  return (
    <Container>
      <SingleNewsItem />
      <NewsComments commentsUpdated={commentsUpdated} onEditComment={handleEditComment} />
      <AddNewsComment handleCommentSubmit={handleCommentSubmit} beforeEditComment={beforeEditComment}/>
    </Container>
  );

}

export default SingleNewsPage;