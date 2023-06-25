import styled from 'styled-components';

const NewsContainer = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  a.big-news-link {
    text-decoration: none;
    color: rgb(254, 249, 253);
    cursor: pointer;
  }

  a.big-news-link:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  margin-top: 50px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export default NewsContainer;