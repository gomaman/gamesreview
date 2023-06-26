import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../../Config/LinksConfig";
import { toast } from "react-toastify";
import CurrentYearMonth from "../../Date/DateYearMonth";
import { ToastContainer } from "react-toastify";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: rgb(41, 37, 37);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;

  & label {
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  & input[type="text"],
  & input[type="range"],
  & textarea {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid rgb(37, 41, 44);
    border-radius: 4px;
    background-color: rgb(15, 14, 19);
    color: white;
  }

  & textarea {
    resize: vertical;
    min-height: 100px;
  }

  & button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const StyledFormContainer = styled.div`
  margin-top: 20px;
`;

const StyledFormComponent = ({newReviewHandler}) => {
    const [title, setTitle] = useState("");
    const [score, setScore] = useState(50);
    const [review, setReview] = useState("");
    const [gameData, setGameData] = useState([])
    const [reviewData, setReviewData] = useState([])
    const [ageRating, setAgeRating] = useState("")
    const [selectedGameId, setSelectedGameId] = useState("")
    const [author, setAuthor] = useState("")
    const [newReviewId, setNewReviewId] = useState("")
    const [defaultGameValue, setDefaultGameValue] = useState("")


    useEffect(() => {
        axios
            .get(API_URL + `/reviews`)
            .then((res) => {
                const reviewsData = res.data;
                setReviewData(reviewsData)
                setNewReviewId(reviewsData[reviewsData.length - 1]?.id + 1);
            })
            .catch((err) => toast.error(err.message));
    }, []);

    useEffect(() => {
        axios
            .get(API_URL + `/games`)
            .then((res) => {
                const gamesData = res.data;
                setGameData(gamesData)
                setDefaultGameValue(gamesData[0].id)
            })
            .catch((err) => toast.error(err.message));
    }, []);

    const validateForm = () => {
        if (
            title.trim() === "" || author.trim() === "" || selectedGameId === "" || review.trim() === ""
        ) {
            toast.error("Supildyti data");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        newReviewHandler()


        if (!validateForm()) {
            return;
        }

        const newReview = {
            gameId: Number(selectedGameId),
            score: score,
            title,
            body: review,
            author,
            ageRating,
            date: CurrentYearMonth(),
            id: newReviewId
        };

        axios
            .post(`${API_URL}/reviews`, newReview)
            .then((response) => {
                toast.success('success');

                setTitle("");
                setScore(50);
                setReview("");
                setSelectedGameId("");
                setAuthor("");
                setAgeRating("");
        
            })
            .catch((err) => toast.error(err.message));
    };

    if (!gameData) {
        return (
            <h1>Loading..</h1>
        )
    }

    return (
        <StyledFormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <div className="score-container">
                    <label htmlFor="score">Score:</label>
                    <input
                        type="range"
                        id="score"
                        min="1"
                        max="100"
                        value={score}
                        onChange={(e) => setScore(Number(e.target.value))}
                    />
                    <p>{score}</p>
                </div>

                <select id="game" value={selectedGameId} onChange={(e) => setSelectedGameId(e.target.value)}>
                    <option disabled value=""> == Pick a Game == </option>
                    {gameData.map((game) => (
                        <option key={game.id} value={game.id}>{game.title}</option>
                    ))}
                </select>

                <select id="ageRating" value={ageRating} onChange={(e) => setAgeRating(e.target.value)}>
                    <option disabled value=""> == Pick a Rating == </option>
                    <option value="Everyone">Everyone</option>
                    <option value="Teen">Teen</option>
                    <option value="Mature">Mature</option>
                </select>

                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />

                <button type="submit">Submit</button>

                <ToastContainer></ToastContainer>
            </StyledForm>
        </StyledFormContainer>
    );
};

export default StyledFormComponent;