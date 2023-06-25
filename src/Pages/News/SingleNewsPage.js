import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import SingleNewsItem from '../../Components/Containers/SingleNews/SingleNewsComponent';

const SingleNewsPage = () => {

  return (
    <Container>
      <SingleNewsItem />
    </Container>
  );
};

export default SingleNewsPage;