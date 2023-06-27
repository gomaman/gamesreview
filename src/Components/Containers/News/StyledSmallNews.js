import styled from 'styled-components';

const SmallNewsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;

  .blog-img-container {
    height: 100%;
  }

  .blog-img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .sideBlog-content-container {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: space-between;
  }

  a.news-link {
    text-decoration: none;
    color: rgb(254, 249, 253);
    cursor: pointer;
  }

  a.news-link:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  & img {
    border-radius: 5px;
  }

`;

export default SmallNewsContainer;