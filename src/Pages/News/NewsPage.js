import React from 'react';

// import './NewsPage.css'
import Container from '@mui/material/Container';
import LargeNews from '../../Components/Containers/News/LargeNews';
import SmallNews from '../../Components/Containers/News/SmallNews';
import NewsBanner from './NewsBanner';
import NewsContainer from '../../Components/Containers/News/StyledNewsContainer';

const NewsPage = () => {

    return (
        <Container>
            <NewsContainer>
                <LargeNews></LargeNews>
                <SmallNews></SmallNews>
            </NewsContainer>
            <NewsBanner></NewsBanner>
        </Container>
    )
}


export default NewsPage