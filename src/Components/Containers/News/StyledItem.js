import styled from 'styled-components';

const StyledNewsItem = styled.div`
  background-color: rgb(40, 48, 68);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.671) 0px 3px 8px;
  }
  grid-gap: 15px; 

  .single-news-img-container img {
    width: 100%;
  }

  .news-author {
    margin: 20px 0px;
    font-weight: 500;
  }

  .news-date {
    margin: 20px 0px;
    font-weight: 500;
  }

  a.news-item-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }

  .single-news-content {
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export default StyledNewsItem;