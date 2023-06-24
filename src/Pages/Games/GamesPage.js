import React from 'react';
import { useEffect, useState } from "react"
import './GamesPage.css'
import Container from '@mui/material/Container';
import GameContainer from '../../Components/Containers/GameContainer';
import PictureContainer from '../../Components/Containers/PictureContainer';
import axios from "axios"
import { API_URL } from '../../Config/LinksConfig';


const GamesPage = () => {
    const backgroundImageUrl = 'https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691';

    const [pictures, setPictures] = useState({})

    useEffect(() => {
        axios.get(API_URL + '/games?_embed=pictures')
            .then(res => console.log(res.data))
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
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};

export default GamesPage;