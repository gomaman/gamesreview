import React from 'react';
import BlogContainer from '../../Components/BlogContainer/BlogContainer';
import './GamesPage.css'
import Container from '@mui/material/Container';
import GameContainer from '../../Components/Containers/GameContainer';

const GamesPage = () => {
    return (
        <Container classes="games-page-container">

            

            <section>
                <div className='games-list-container'>
                    <ul className='games-list'>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                        <li><GameContainer>testtest</GameContainer></li>
                    </ul>
                </div>
            </section>




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


        </Container>
    );
};

export default GamesPage;