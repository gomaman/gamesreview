import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../../Config/LinksConfig";
import { toast } from "react-toastify";

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

const StyledFormComponent = () => {
    const [title, setTitle] = useState("");
    const [score, setScore] = useState("");
    const [body, setBody] = useState("");
    const [review, setReview] = useState("");


    useEffect(() => {
        axios
            .get(API_URL + `/reviews`)
            .then((res) => {
                const usersData = res.data;
                console.log(usersData)
                // setReviews(usersData);
                // setCommenterUserId(usersData[0].id);
            })
            .catch((err) => toast.error(err.message));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />

                <button type="submit">Submit</button>
            </StyledForm>
        </StyledFormContainer>
    );
};

export default StyledFormComponent;