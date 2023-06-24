import React from 'react';
import './GamesPage.css'
import Container from '@mui/material/Container';
import GameContainer from '../../Components/Containers/GameContainer';
import PictureContainer from '../../Components/Containers/PictureContainer';


const GamesPage = () => {
    const backgroundImageUrl = 'https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691';

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
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="TEST">
                            </GameContainer>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};

export default GamesPage;