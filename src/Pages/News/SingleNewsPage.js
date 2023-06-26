import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SingleNewsItem from '../../Components/Containers/SingleNews/SingleNewsComponent';
import NewsComments from '../../Components/Containers/News/NewsComments';
import AddNewsComment from '../../Components/Containers/News/AddNewsComment';
import { useState } from 'react';

const SingleNewsPage = () => {

  const [commentsUpdated, setCommentsUpdated] = useState(false);

  const handleCommentSubmit = () => {
    console.log(commentsUpdated)
    setCommentsUpdated(!commentsUpdated);
  };


  return (
    <Container>
      <SingleNewsItem />
      <NewsComments commentsUpdated={commentsUpdated} />
      <AddNewsComment handleCommentSubmit={handleCommentSubmit} />
    </Container>
  );

}

export default SingleNewsPage;