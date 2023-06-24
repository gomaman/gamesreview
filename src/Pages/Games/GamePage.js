import { useParams } from "react-router-dom";
import React from 'react';
import { useEffect, useState } from "react";
import './GamesPage.css';
import './GamePage.css'
import Container from '@mui/material/Container';
import PictureContainer from '../../Components/Containers/PictureContainer';
import axios from "axios";
import { API_URL } from '../../Config/LinksConfig';

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [picture, setPicture] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(API_URL + `/games/${id}?_embed=pictures`)
      .then(res => {
        const gameData = res.data;
        console.log(gameData);
        setPicture(gameData.pictures[0]?.url);
        setGame(gameData);
      });
  }, [id]);

  if (!game || !picture) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="games-page-container">
      <section className="game-details-section">
        <h1 className="game-title">{game.title}</h1>
        <PictureContainer imageSrc={picture} />
        <ul className="platform-list">
          {game.platform.map((platform) => (
            <li key={platform} className="platform-item">{platform}</li>
          ))}
        </ul>

        <div className="release-date">
          <p>{game.releaseDate}</p>
        </div>
      </section>
    </Container>
  );
};

export default GamePage;