import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SingleNewsItem from '../../Components/Containers/SingleNews/SingleNewsComponent';
import NewsComments from '../../Components/Containers/News/NewsComments';

const SingleNewsPage = () => {

  return (
    <Container>
      <SingleNewsItem />
      <NewsComments />
    </Container>
  );
};

export default SingleNewsPage;