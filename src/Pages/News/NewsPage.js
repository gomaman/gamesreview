import React from 'react';
import BlogContainer from '../../Components/BlogContainer/BlogContainer';
import './NewsPage.css'
import Container from '@mui/material/Container';
import GameContainer from '../../Components/Containers/GameContainer';

const NewsPage = () => {
    return (
        <Container>
            <section className="hero-section">
                <div className="blogs-container">
                    <div className="left-blog-container">
                        <BlogContainer classes="big">
                            <div className='blog-img-container'>
                                <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                            </div>
                            <div className='main-blog-content-container'>
                                <h2>Blog Title</h2>
                                <h3>News Short Body</h3>
                                <div className='sideBlog-content'>
                                    <p>Author</p>
                                    <p>Release Date: June 1, 2023</p>
                                </div>

                            </div>
                        </BlogContainer>
                    </div>

                    <div className="right-blog-container">
                        <BlogContainer classes="small">
                            <div className='blog-img-container'>
                                <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                            </div>
                            <div className='sideBlog-content-container'>
                                <h2>Another Blog Title TEST </h2>
                                <div className='sideBlog-content'>
                                    <p>Author</p>
                                    <p>Release Date: June 1, 2023</p>
                                </div>
                            </div>
                        </BlogContainer>

                        <BlogContainer classes="small">
                            <div className='blog-img-container'>
                                <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                            </div>
                            <div className='sideBlog-content-container'>
                                <h2>Another Blog Title TEST </h2>
                                <div className='sideBlog-content'>
                                    <p>Author</p>
                                    <p>Release Date: June 1, 2023</p>
                                </div>
                            </div>
                        </BlogContainer>

                        <BlogContainer classes="small">
                            <div className='blog-img-container'>
                                <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                            </div>
                            <div className='sideBlog-content-container'>
                                <h2>Another Blog Title TEST Title TEST </h2>
                                <div className='sideBlog-content'>
                                    <p>Author</p>
                                    <p>Release Date: June 1, 2023</p>
                                </div>
                            </div>
                        </BlogContainer>
                    </div>
                </div>
            </section>

            <section>
                <div className='games-list-container'>
                    <ul className='games-list'>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
                            <GameContainer 
                            buttonText="View Game Details">
                            </GameContainer>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>

    )
}



export default NewsPage