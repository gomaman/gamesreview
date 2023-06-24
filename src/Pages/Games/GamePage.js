import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './GamesPage.css';
import './GamePage.css';
import Container from '@mui/material/Container';
import PictureContainer from '../../Components/Containers/PictureContainer';
import axios from "axios";
import { API_URL } from '../../Config/LinksConfig';
import GameReview from "./GameReview";

const GamePage = () => {
    const [game, setGame] = useState(null);
    const [picture, setPicture] = useState(null);
    const [review, setReview] = useState(null)
    const [userReview, setUserReview] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=pictures`)
            .then(res => {
                const gameData = res.data;
                setPicture(gameData.pictures[0]?.url);
                setGame(gameData);
            })
            .catch(error => {
                console.log("Error occurred while fetching game data:", error);
            });
    }, [id]);

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=reviews`)
            .then(res => {
                const reviewsData = res.data;
                setReview(reviewsData.reviews[0]);
            })
            .catch(error => {
                console.log("Error occurred while fetching reviews data:", error);
            });
    }, [id]);

    useEffect(() => {
        axios.get(API_URL + `/games/${id}?_embed=userReviews`)
            .then(res => {
                const reviewsData = res.data;
                setReview(reviewsData.reviews[0]);
            })
            .catch(error => {
                console.log("Error occurred while fetching reviews data:", error);
            });
    }, [id]);

    if (!game || !picture || !review) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="games-page-container">
            <section className="game-details-section">

                <PictureContainer imageSrc={picture} />

                <h2 className="game-title">{game.title}</h2>


                <div>
                    <div>
                    <ul className="platform-list">
                        {game.platform.map((platform) => (
                            <li key={platform} className="platform-item">{platform}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="release-date">
                        <p>{game.releaseDate}</p>
                    </div>
                </div>

                <div>
                    <GameReview
                    review={review}
                    >

                    </GameReview>

                </div>

            </section>
        </Container>
    );
};

export default GamePage;