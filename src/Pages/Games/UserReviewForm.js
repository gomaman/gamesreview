import './GameReviewForm.css';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../Config/LinksConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserReviewForm = ({ resetUserReview }) => {
    const { id } = useParams();

    const gameId = id

    const [body, setBody] = useState('');
    const [score, setScore] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('')
    const [users, setUsers] = useState('')
    const [author, setAuthor] = useState('')
    const [userId, setUserId] = useState(user)
    const [title, setTitle] = useState('')
    const [reviews, setReviews] = useState('')
    const [lastReview, setLastReview] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!author) {
            return;
        }

        setTitle('');
        setBody('');
        setScore('');
        setDate('');
        setUserId('');

        console.log("gameId", Number(gameId));
        console.log("Score:", Number(score));
        console.log("Title:", title);
        console.log("Body:", body);
        console.log("Author:", author);
        console.log("Date:", date);
        console.log("userId", Number(userId));

        console.log(lastReview.id + 1)


        axios
            .post(`${API_URL}/userReviews`, {
                gameId: Number(gameId),
                score: Number(score),
                title,
                body,
                author,
                date,
                userId: Number(userId),
                id: lastReview.id + 1,
            })
            .then((response) => {
                console.log(response.data);
                resetUserReview();
              })
            .catch(err => toast.error(err.message));
    };

    
    useEffect(() => {
        axios
          .get(API_URL + `/userReviews`)
          .then((res) => {
            const gameData = res.data;
            const lastReviewData = gameData[gameData.length - 1];
            setReviews(gameData);
            setLastReview(lastReviewData);
      
            // if (gameData.userReviews.length > 0) {
            //   const lastReviewData = gameData.userReviews[gameData.userReviews.length - 1];
            //   setLastReview(lastReviewData);
            // } else {
            //   setLastReview(null);
            // }
          })
          .catch((err) => toast.error(err.message));
      }, [author]);
      

    useEffect(() => {
        axios.get(API_URL + `/users/${userId}`)
            .then(res => {
                setAuthor(res.data.username);
            })
            .catch(err => toast.error(err.message));
    }, [userId]);

    useEffect(() => {
        axios.get(API_URL + `/users`)
            .then(res => {
                setUsers(res.data);
                setUser(res.data[0].id)
            })
            .catch(err => toast.error(err.message));
    }, [id]);



    if (!users) {
        return <p>Loading...</p>;
    }

    return (
        <div className="form-container">
            <h2>User Review Form</h2>
            <form className="review-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="input-text"
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="body">
                        Body:
                    </label>
                    <textarea
                        className="textarea"
                        id="body"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="author">
                        Author:
                    </label>
                    <select
                        className="input-select"
                        id="author"
                        name="author"
                        onChange={(e) => {
                            const selectedUserId = e.target.value;
                            setUserId(selectedUserId);
                        }}
                    >
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="score">
                        Score:
                    </label>
                    <input
                        className="input-number"
                        type="number"
                        id="score"
                        name="score"
                        min="1"
                        max="10"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="date">
                        Date:
                    </label>
                    <input
                        className="input-date"
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button className="submit-button" type="submit">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default UserReviewForm;