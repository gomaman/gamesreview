import React from 'react';

import './NewsPage.css'
import Container from '@mui/material/Container';
import LargeNews from '../../Components/Containers/News/LargeNews';
import SmallNews from '../../Components/Containers/News/SmallNews';
import NewsBanner from './NewsBanner';

const NewsPage = () => {
    return (
        <Container>
                <div className="blogs-container">
                <LargeNews></LargeNews>
                <SmallNews></SmallNews>
                </div>



                <NewsBanner></NewsBanner>
        </Container>

    )
}



export default NewsPage