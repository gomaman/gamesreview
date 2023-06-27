import React from 'react';
import { useState } from 'react';
import { API_URL } from '../../Config/LinksConfig';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

import Container from '@mui/material/Container';
import LargeNews from '../../Components/Containers/News/LargeNews';
import SmallNews from '../../Components/Containers/News/SmallNews';
import NewsBanner from './NewsBanner';
import NewsContainer from '../../Components/Containers/News/StyledNewsContainer';
import NewsItem from '../../Components/Containers/News/NewsItem';
import AllNewsContainer from '../../Components/Containers/News/AllNewsContainer';

const NewsPage = () => {

    const [news, setNews] = useState()
    const [firstNews, setFirstNews] = useState()
    const [afterFirstNews, setAfterFirstNews] = useState()

    useEffect(() => {
        axios.get(API_URL + `/news`)
            .then(res => {
                const newsData = res.data;
                setNews(newsData);
                setFirstNews(newsData[0])
                setAfterFirstNews(newsData.slice(1, 4))
            })
            .catch(err => toast.error(err.message))
    }, []);

    if(!news) {
        return (
            <h1>Loading...</h1>
        )
    }   else {
        return (
            <Container>
                <NewsContainer>
                    <LargeNews firstNews={firstNews}></LargeNews>
                    <SmallNews afterFirstNews={afterFirstNews}></SmallNews>
                </NewsContainer>
                <NewsBanner></NewsBanner>
                <AllNewsContainer>
                    {news.map(item => (
                        <NewsItem key={item.id} newsData={item} />
                    ))}
                </AllNewsContainer>
            </Container>
        )
    }
}


export default NewsPage