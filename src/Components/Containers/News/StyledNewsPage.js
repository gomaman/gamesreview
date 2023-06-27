
import styled from 'styled-components';

const StyledSingleNews = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  background-color: rgb(40,48,68);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  .news-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .news-title {
    font-size: 24px;
    font-weight: bold;
    margin: 16px 0;
    color: rgb(254,249,253)
  }
  
  .news-body {
    font-size: 18px;
    line-height: 1.5;
    color: rgb(254,249,253)
  }
  
  .news-author {
    font-size: 16px;
    color: rgb(254,249,253);
    margin-bottom: 8px;
  }
  
  .news-date {
    font-size: 16px;
    color: rgb(254,249,253)
  }
`;

export default StyledSingleNews;