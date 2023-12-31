import React from 'react';
import StyledForm from '../SingleNews/StyledForm';
import { Button2 } from '../../BlogContainer/Button/Buttons';
import CurrentDateTime from '../../Date/Date';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { API_URL } from '../../../Config/LinksConfig';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddNewsComment = ({ handleCommentSubmit, beforeEditComment }) => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [commenter, setCommenter] = useState('');
  const [newCommentBody, setNewCommentBody] = useState('');
  const [commentDate, setCommentDate] = useState(CurrentDateTime());
  const [commenterUserId, setCommenterUserId] = useState('');

  useEffect(() => {
    axios
      .get(API_URL + `/users/`)
      .then((res) => {
        const usersData = res.data;
        setUsers(usersData);
        setCommenterUserId(usersData[0].id);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    if (beforeEditComment) {
      setCommenterUserId(beforeEditComment.userId);
      setNewCommentBody(beforeEditComment.body);
    }
  }, [beforeEditComment]);


  const handleUserSelect = (e) => {
    setCommenterUserId(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewCommentBody(e.target.value);
  };

  const submitComment = (e) => {
    handleCommentSubmit();
    e.preventDefault();
    setCommenter(e.target.select.value);
    setNewCommentBody(e.target.body.value);
    setCommentDate(CurrentDateTime());
    setCommenterUserId(e.target.select.value);

    if (e.target.body.value === '') {
      toast.error('pakomentuok');
      return;
    }


    if(beforeEditComment) {

    const updatedComment = {
      ...beforeEditComment,
      userId: Number(commenterUserId),
      body: newCommentBody,
      date: commentDate,
    };

    axios
      .put(`${API_URL}/comments/${updatedComment.id}`, updatedComment)
      .then((response) => {
        toast.success('Comment updated successfully.');
      })
      .catch((err) => toast.error(err.message));
    } else {

      const newComment = {
        newsId: Number(id),
        userId: Number(commenterUserId),
        body: newCommentBody,
        date: commentDate,
      };
  
      axios
        .post(`${API_URL}/comments`, newComment)
        .then((response) => {
          toast.success('success');
        })
        .catch((err) => toast.error(err.message));
    }

    setCommenter('');
    setNewCommentBody('');
    setCommentDate(CurrentDateTime());
    setCommenterUserId(users[0].id);
  };

  return (
    <StyledForm onSubmit={submitComment}>
      <div>
        <label htmlFor="select">User:</label>
        <select id="select" name="select" value={commenterUserId} onChange={handleUserSelect}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username} ({user.name})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="body">Comment:</label>
        <textarea id="body" name="body" value={newCommentBody} onChange={handleCommentChange}></textarea>
      </div>
      <Button2 type="submit">Submit</Button2>
    </StyledForm>
  );
};

export default AddNewsComment;