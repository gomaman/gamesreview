import React from 'react';
import './NewsPage.css'
import Container from '@mui/material/Container';
import LargeNews from '../../Components/Containers/News/LargeNews';
import SmallNews from '../../Components/Containers/News/SmallNews';
import NewsBanner from './NewsBanner';

const NewsPage = () => {
    return (
        <Container>
            <section className="hero-section">
                <div className="blogs-container">
                    
                <LargeNews></LargeNews>

                <SmallNews></SmallNews>
                </div>
            </section>

            <section>
                <NewsBanner></NewsBanner>
            </section>
        </Container>

    )
}



export default NewsPage