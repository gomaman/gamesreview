import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SingleNewsItem from '../../Components/Containers/SingleNews/SingleNewsComponent';
import NewsComments from '../../Components/Containers/News/NewsComments';
import AddNewsComment from '../../Components/Containers/News/AddNewsComment';

const SingleNewsPage = () => {

  return (
    <Container>
      <SingleNewsItem />
      <NewsComments />
      <AddNewsComment />
    </Container>
  );
};

export default SingleNewsPage;