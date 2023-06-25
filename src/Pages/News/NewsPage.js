import React from 'react';

// import './NewsPage.css'
import Container from '@mui/material/Container';
import LargeNews from '../../Components/Containers/News/LargeNews';
import SmallNews from '../../Components/Containers/News/SmallNews';
import NewsBanner from './NewsBanner';
import NewsContainer from '../../Components/Containers/News/StyledNewsContainer';
import styled from 'styled-components';



const AllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;


const NewsPage = () => {

    return (
        <Container>
            <NewsContainer>
                <LargeNews></LargeNews>
                <SmallNews></SmallNews>
            </NewsContainer>
            <NewsBanner></NewsBanner>
            <AllNewsContainer></AllNewsContainer>
        </Container>
    )
}


export default NewsPage