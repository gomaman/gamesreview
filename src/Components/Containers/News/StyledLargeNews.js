import styled from 'styled-components';

const StyledLargeNews = styled.div`
  .left-blog-container {
    display: grid;
    grid-template-rows: 2fr 1fr;
  }

  .left-blog-container .blog-img-container {
    height: 100%;
  }

  .left-blog-container .blog-img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .left-blog-container .main-blog-content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
  }
  `

  export default StyledLargeNews