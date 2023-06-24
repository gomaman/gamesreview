import React from 'react';
import Container from '../../Components/Containers/Container';
import BlogContainer from '../../Components/BlogContainer/BlogContainer';
import './GamesPage.css'

const GamesPage = () => {
  return (
    <Container classes="games-page-container">
      <section className="hero-section">
        <div className="blogs-container">
          <div className="left-blog-container">
            <BlogContainer classes="big">
                <div>
              <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                </div>
                <div>
              <h2>Blog Title</h2>
              <p>Release Date: June 1, 2023</p>
                </div>
            </BlogContainer>
          </div>

          <div className="right-blog-container">
            <BlogContainer classes="small">
                <div>
              <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                </div>
                <div>
              <h2>Another Blog Title</h2>
              <p>Release Date: June 5, 2023</p>      
                </div>
            </BlogContainer>

            <BlogContainer classes="small">
                <div>
              <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                </div>
                <div>
              <h2>Another Blog Title</h2>
              <p>Release Date: June 5, 2023</p>      
                </div>
            </BlogContainer>

            <BlogContainer classes="small">
                <div>
              <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
                </div>
                <div>
              <h2>Another Blog Title</h2>
              <p>Release Date: June 5, 2023</p>      
                </div>
            </BlogContainer>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default GamesPage;