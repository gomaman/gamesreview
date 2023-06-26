import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../../Config/LinksConfig';


const CommentAuthor = ({ userId }) => {
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      if (userId) {
        axios
          .get(API_URL + `/users/${userId}?_embed=comments`)
          .then((res) => {
            const userData = res.data;
            setUsername(userData.username);
          })
          .catch((err) => toast.error(err.message));
      }
    }, [userId]);
  //atrodo kad veikia, bet grizes palauzyk
    return <p>Author: {username}</p>;
  };


  export default CommentAuthor