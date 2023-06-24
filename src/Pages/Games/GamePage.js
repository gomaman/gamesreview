import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../Config/LinksConfig';
import Container from '@mui/material/Container';
import PictureContainer from '../../Components/Containers/PictureContainer';
import GameReview from "./GameReview";
import GameUserReview from "./GameUserReview";
import UserReviewForm from "./UserReviewForm";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './GamesPage.css';
import './GamePage.css';

const GamePage = () => {
    const [game, setGame] = useState(null);
    const [picture, setPicture] = useState(null);
    const [review, setReview] = useState(null);
    const [userReview, setUserReview] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=pictures`)
            .then(res => {
                const gameData = res.data;
                setPicture(gameData.pictures[0]?.url);
                setGame(gameData);
            })
            .catch(err => toast.error(err.message))
    }, [id]);

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=reviews`)
            .then(res => {
                const reviewsData = res.data;
                setReview(reviewsData.reviews[0]);
            })
            .catch(err => toast.error(err.message))
    }, [id]);

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=userReviews`)
            .then(res => {
                setUserReview(res.data.userReviews);
            })
            .catch(err => toast.error(err.message))
    }, [id]);



    if (!game || !picture || !review || !userReview) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="games-page-container">
            <section className="game-details-section">
                <PictureContainer imageSrc={picture} />

                <h2 className="game-title">{game.title}</h2>

                {game && (
                    <div>
                        <div>
                            <ul className="platform-list">
                                {game.platform.map((platform) => (
                                    <li key={platform} className="platform-item">
                                        {platform}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="release-date">
                            <p>{game.releaseDate}</p>
                        </div>
                    </div>
                )}

                <div>
                    {review ? (
                        <GameReview review={review} />
                    ) : (
                        <p>No  reviews available.</p>
                    )}
                </div>

                <div>
                    {userReview ? (
                        <GameUserReview userReview={userReview} />
                    ) : (
                        <p>No user reviews available.</p>
                    )}
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <UserReviewForm>

                </UserReviewForm>
            </section>
        </Container>
    );
};

export default GamePage;