import React from 'react';
import { useEffect, useState } from "react"
import './GamesPage.css'
import Container from '@mui/material/Container';
import GameContainer from '../../Components/Containers/GameContainer';
import PictureContainer from '../../Components/Containers/PictureContainer';
import axios from "axios"
import { API_URL } from '../../Config/LinksConfig';
import { Link } from "react-router-dom"


const GamesPage = () => {
    const backgroundImageUrl = 'https://assetsio.reedpopcdn.com/system-shock-remake-robot.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp';

    const [games, setGames] = useState([])
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        axios.get(API_URL + '/games?_embed=pictures')
            .then(res => {
                const gamesData = res.data
                setGames(gamesData)
                const picturesData = gamesData.map(game => game.pictures[0]);
                setPictures(picturesData);
            })
    }, [])

    return (
        <Container className="games-page-container">
            <section>
                <PictureContainer
                    altText="witcher 3 gamepromo"
                    imageSrc={backgroundImageUrl}
                    linkText="View Game Details"
                    linkUrl=""
                />
            </section>

            <section>
                <div className='games-list-container'>
                    <ul className='games-list'>
                        {games.map((game, index) => (
                            <Link key={game.id} to={`/games/game/${game.id}`}>
                                <li key={game.id} style={{ backgroundImage: `url(${pictures[index].url})` }}>
                                    <GameContainer key={game.id} titleText={game.title} buttonText="View Game Details" />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </section>
        </Container>
    );
};

export default GamesPage;