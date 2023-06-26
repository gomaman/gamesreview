import styled from 'styled-components';

const StyledReviewItem = styled.div`
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

  .review-rating {
    margin: 20px 0px;
    font-weight: 500;
  }

  .review-author {
    margin: 20px 0px;
    font-weight: 500;
  }

  .review-date {
    margin: 20px 0px;
    font-weight: 500;
  }

  .review-content {
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export default StyledReviewItem;