
import React, { useState } from 'react'
import StyledNewsItem from '../News/StyledNewsItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { API_URL } from '../../../Config/LinksConfig';

const NewsComments = () => {

    const { id } = useParams();

    const [newsData, setNewsData] = useState({})
    const [comments, setComments] = useState()
    const [userId, setUserId] = useState()
    
    // http://localhost:3000/users/1?_embed=comments

    useEffect(() => {
        axios.get(API_URL + `/news/${id}?_embed=comments`)
            .then(res => {
                const newsData = res.data;
                console.log(newsData)
                setNewsData(newsData)
                setComments(newsData.comments);
                setUserId(newsData.comments.userId)
            })
            .catch(err => toast.error(err.message))
    }, [id]);


  return (
    <div>
        <ul>
            <li>{comments[0].body}</li>
            <li>{comments[0].userId}</li>
        </ul>
    </div>
  )
}

export default NewsComments


for (let i=0; i<10; i++) {
    console.log(i+5)
}

